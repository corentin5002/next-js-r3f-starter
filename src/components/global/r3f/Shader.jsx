import {useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {useTweaks} from "use-tweaks";
import fragmentShader from "../../../app/shaders/fragment.glsl";
import vertexShader from "../../../app/shaders/vertex.glsl";
import * as THREE from "three";

export default function Shader(props) {
    const shaderRef = useRef(null);
    const { viewport } = useThree();
    const { opacity } = useTweaks({
        opacity: { value: 1, min: 0, max: 1, step: 0.05 },
    });
    useFrame((state) => {
        if (shaderRef.current) {
            shaderRef.current.uniforms.uTime.value += 0.01;
            shaderRef.current.uniforms.uOpacity.value = opacity;
            shaderRef.current.uniforms.uPointer.value = state.pointer;
        }
    });

    return (
        <mesh {...props}>
            <planeGeometry args={[viewport.width, viewport.height, 10]} />
            <shaderMaterial
                ref={shaderRef}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={{
                    uTime: { value: 0.0 },
                    uPointer: { value: new THREE.Vector2(0.5, 0.5) },
                    uOpacity: { value: 0.0 },
                }}
            />
        </mesh>
    );
}
