uniform sampler2D envMap;
uniform vec2 resolution;

varying vec3 worldNormal;
varying vec3 eyeVector;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
	return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
}

float ior = 1.8;

void main() {

	// get screen coordinates
	vec2 uv = gl_FragCoord.xy / resolution;

	vec3 normal = worldNormal;
	// calculate refraction and add to the screen coordinates
	vec3 refracted = refract(eyeVector, normal, 1.0/ior);
	uv += refracted.xy;

	// sample the background texture
	vec4 tex = texture2D(envMap, uv) * .9;

	vec4 output1 = tex;

	// calculate the Fresnel ratio
	float f = Fresnel(eyeVector, normal);

	// mix the refraction color and reflection color
	output1.rgb = mix(output1.rgb, vec3(1.0), f);


    // gl_FragColor = vec4(uv, 0.0, 1.0);
	gl_FragColor = vec4(output1.rgb, 1.0);
}