import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Model() {
  const computer = useGLTF("./bus/scene.gltf");
  return (
    <mesh className="border-2 border-red-400">
      <hemisphereLight intensity={0.95} />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      intensity={0.25}
      shadows
      angle={0.12}
      penumbra={1}
       />
      <primitive
        object={computer.scene}
        scale={1.5}
        position={[0, -2.5, -1.25]}
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
  return (
    <div className="w-full h-full xl:w-[1080px] xl:h-[500px] mx-auto ">
      <Canvas
        frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [20, 3, 5], fov: 25 }}
      >
        <Suspense>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ComputerCanvas;
