import style from '../css/style.css'

import Sketch from './sketch.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

let sketches = [];

document.querySelectorAll('.sketch').forEach(sketch => {
    sketches.push(new Sketch(sketch))
})

gsap.registerPlugin(ScrollTrigger)

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(sketches[0].uniforms.velocity, "value"), // fast
    clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

const tl = gsap.timeline({
    scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {skew: 0, duration: 2, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
            }
        }
    }
})

tl.to(sketches[0].uniforms.scroll, {
    value: '+=20',
}, 0)
tl.to(sketches[0].box.rotation, {
    y: '+=5',
}, 0)