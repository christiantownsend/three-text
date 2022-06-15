import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import vertShader from '../assets/vertex.glsl?raw'
import fragShader from '../assets/fragment.glsl?raw'

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

        // Init Camera

        // this.camera = new THREE.PerspectiveCamera( 75, this.aspect, 0.1, 1000)
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1)

        this.camera.position.z = 5
        
        // Init Controls

        // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        // this.controls.enableDamping = true
        // this.controls.dampingFactor = .1

        // Init Scene

        const str       = "LET'S FUCKING GO!"

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

        const texture = new THREE.Texture(canvas)
        texture.generateMipmaps = false
        texture.needsUpdate = true

        this.uniforms = {
            ...this.uniforms,
            texture1: {
                type: 't',
                value: texture
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

        this.scene.add(plane)

        // Set window size

        window.addEventListener('resize', () => this.resize())
        this.resize()

        // Start update loop

        this.update()
    }

    resize() {
        this.aspect = this.el.clientWidth / this.el.clientHeight
        this.uniforms.wAspect.value = this.aspect

        this.renderer.setSize(this.el.clientWidth, this.el.clientHeight);
    }

    update() {
        requestAnimationFrame(() => this.update());

        // Update Loop

        this.material.uniformsNeedUpdate = true

        this.uniforms.time.value += .01;
        // this.controls.update();

        // Render scene

        this.renderer.render(this.scene, this.camera)
    }
}