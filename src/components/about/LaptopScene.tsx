"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MacbookModel() {
  const { scene } = useGLTF("/models/mac.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x, 
        Math.cos(t / 2) / 20 + 0.25, 
        0.1
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, 
        Math.sin(t / 4) / 20, 
        0.1
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z, 
        Math.sin(t / 8) / 20, 
        0.1
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y, 
        (-2 + Math.sin(t / 2)) / 2, 
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.75} position={[0.5, -0.1, 0]} />
    </group>
  );
}

export function LaptopScene() {
  return (
    <Canvas
      camera={{ 
        position: [0, 2, 12], 
        fov: 50,
        near: 0.1,
        far: 1000
      }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="studio" />

      <MacbookModel />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
