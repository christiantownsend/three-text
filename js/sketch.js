import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

import vertShader from '../assets/vertex.glsl?raw'
import fragShader from '../assets/fragment.glsl?raw'
import refractVert from '../assets/refractVert.glsl?raw'
import refractFrag from '../assets/refractFrag.glsl?raw'

export default class Sketch {
    constructor(el) {
        this.el = el
        this.aspect = this.el.clientWidth / this.el.clientHeight

        this.uniforms = {
            wAspect: {
                value: this.aspect
            },
            time: {
                value: 0
            },
            seed: {
                value: Math.random() * 100
            }
        }

        this.init()
    }

    init() {
        // Init THREE

        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setClearColor(new THREE.Color(0xffffff))
        this.el.appendChild(this.renderer.domElement);

        this.rtScene = new THREE.Scene()
        this.renderTarget = new THREE.WebGLRenderTarget();

        // Init Camera

        this.camera = new THREE.PerspectiveCamera( 90, this.aspect, .01, 1000)
        
        this.rtCamera = new THREE.OrthographicCamera(-1, 1, 1, -1)
        
        this.camera.position.z = 2
        this.rtCamera.position.z = 1
        
        // Init Controls

        // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        // this.controls.enableDamping = true
        // this.controls.dampingFactor = .1

        // Init Scene

        const str       = "REFRACT!"

        const canvas = document.createElement('canvas')
        const ctx       = canvas.getContext('2d')
        const ff = 'bold 40em Helvetica'
        const paddingInline = 60;
        const paddingBlock = 40;

        ctx.font = ff
        const metrics = ctx.measureText(str)
        
        canvas.width = metrics.width + paddingInline * 2
        canvas.height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + paddingBlock * 2
        console.log(canvas.width, canvas.height)
        
        const aspect = canvas.width / canvas.height;

        ctx.font = ff
        ctx.fillStyle = 'black'
        ctx.fillText(str, paddingInline, canvas.height - metrics.actualBoundingBoxDescent - paddingBlock)

        const texture1 = new THREE.CanvasTexture(canvas)
        texture1.generateMipmaps = false
        texture1.needsUpdate = true

        this.uniforms = {
            ...this.uniforms,
            texture1: {
                type: 't',
                value: texture1
            },
            tAspect: {
                type: 'f',
                value: aspect
            },
            scroll: {
                type: 'f',
                value: 100
            },
            velocity: {
                type: 'f',
                value: 0
            }
        }

        const geometry = new THREE.PlaneGeometry(2, 2)

        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            fragmentShader: fragShader,
            vertexShader: vertShader,
            transparent: true
        })

        const plane = new THREE.Mesh(geometry, this.material)

        this.rtScene.add(plane)

        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
        
        const geometry2 = new RoundedBoxGeometry(1, 1, 1, 1, .01)
        this.material2 = new THREE.ShaderMaterial({
            uniforms: {
                envMap: {
                    value: this.renderTarget.texture
                },
                resolution: {
                    value: [this.el.clientWidth, this.el.clientHeight]
                }
            },
            fragmentShader: refractFrag,
            vertexShader: refractVert,
            transparent: true
        });
        this.box = new THREE.Mesh(geometry2, this.material2)
        this.box.rotation.z = -.5
        this.box.position.z = 0

        this.scene.add(this.box)

        this.scene.background = this.renderTarget.texture

        // Set window size

        window.addEventListener('resize', () => this.resize())
        this.resize()

        // Start update loop

        this.update()
    }

    resize() {
        this.aspect = this.el.clientWidth / this.el.clientHeight
        this.uniforms.wAspect.value = this.aspect
        this.material2.uniforms.resolution.value = [this.el.clientWidth, this.el.clientHeight]

        this.renderer.setSize(this.el.clientWidth, this.el.clientHeight)
        this.renderTarget.setSize(this.el.clientWidth, this.el.clientHeight)
        this.camera.aspect = this.aspect
        this.camera.updateProjectionMatrix()
    }

    update() {
        requestAnimationFrame(() => this.update());

        // Update Loop

        // this.uniforms.time.value += .01
        // this.controls.update();

        // this.box.rotation.y = this.uniforms.scroll.value

        // Render scene

        
        this.renderer.setRenderTarget(this.renderTarget)
        this.renderer.render(this.rtScene, this.rtCamera)
        this.renderer.setRenderTarget(null)
        
        this.renderer.render(this.scene, this.camera)
    }
}