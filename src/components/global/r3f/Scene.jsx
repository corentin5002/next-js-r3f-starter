import {Canvas} from "@react-three/fiber";
import Shader from "./Shader";

export default function Scene (){
    return (
        <Canvas orthographic>
            <ambientLight intensity={Math.PI / 2} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Shader props={{ position: [0, 0, 0] }} />
        </Canvas>
    )
}