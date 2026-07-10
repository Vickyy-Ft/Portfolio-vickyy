import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    // Traverse the 3D model and change the materials to white
    computer.scene.traverse((child: any) => {
      if (child.isMesh && child.material && child.material.color) {
        // We can check if the material is originally dark, or just force common materials to white.
        // A lot of the case and keyboard materials are dark grays/blacks.
        const r = child.material.color.r;
        const g = child.material.color.g;
        const b = child.material.color.b;
        
        // If the color is quite dark, change it to white
        if (r < 0.2 && g < 0.2 && b < 0.2) {
          child.material.color.setHex(0xffffff);
        }
      }
    });
  }, [computer.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.9}
        position={isMobile ? [0, -4, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 1, 5], fov: 32 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ComputersCanvas;
