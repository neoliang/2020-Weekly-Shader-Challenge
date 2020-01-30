#iChannel0 "file://./05/id1_path.frag"
#define INV_GAMMA  0.454545

void
mainImage(out vec4 fragColor, in vec2 fragPos)
{
    vec2 uv = (fragPos) /iResolution.xy;

    vec3 col = vec3(0.0);
    if(iFrame > 0)
    {
        col = texture(iChannel0, uv).xyz;
        col /= float(iFrame);
    }

    col = pow(col, vec3(INV_GAMMA));
    fragColor = vec4(col, 1.0);
}   