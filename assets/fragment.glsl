varying vec2 vUv;
uniform sampler2D texture1;
uniform float tAspect;
uniform float wAspect;
uniform float time;
uniform float scroll;
uniform float velocity;
uniform float seed;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float repeat = 5.0;
// float seed   = 2.0;
float speed  = 0.15;

void main() {



    vec2 uv = 2.0 * vUv - 1.0;

    float mask = clamp((abs(uv.x) - 0.8) * 5.0, 0.0, 1.0);

    uv.y *= 1.0 - ((mask*mask*mask) * .1);

    uv = 0.5 * (uv * vec2(wAspect, 1.0) * vec2(1.0/tAspect, 1.0)) + 0.5;
    
    float snapped = floor(uv.y * repeat) / repeat;

    float random = rand(vec2(snapped) + seed);

    float dir = sign(2.0 * random - 1.0);
    random = dir * (random * .8 + .2);

    vec2 rowsR = fract(uv * repeat + vec2(random * scroll * speed, 0.0));
    vec2 rowsG = fract(uv * repeat + vec2(random * scroll * speed + (velocity * .00075 * random), 0.0));
    vec2 rowsB = fract(uv * repeat + vec2(random * scroll * speed + (velocity * .00125 * random), 0.0));

    float colorR = texture2D(texture1, rowsR).a;
    float colorG = texture2D(texture1, rowsG).a;
    float colorB = texture2D(texture1, rowsB).a;

    vec4 color = 1.0 - vec4(colorR, colorG, colorB, 0.0);

    gl_FragColor = color;

    // gl_FragColor = vec4(vec3(mask), 1.0);
}