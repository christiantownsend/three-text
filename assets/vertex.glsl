varying vec2 vUv; 

void main() {
    vUv = (position.xy + 1.0) / 2.0; 

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition; 
}