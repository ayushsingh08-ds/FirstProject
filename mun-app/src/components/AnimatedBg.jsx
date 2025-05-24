import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Swirl() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusKnotGeometry args={[8, 2, 200, 32]} />
      <meshStandardMaterial color="#2574ff" roughness={0.4} metalness={0.7} transparent opacity={0.17} />
    </mesh>
  );
}

export default function AnimatedBg() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "radial-gradient(ellipse at center, #0c1630 60%, #202040 100%)",
      }}
      camera={{ position: [0, 0, 32], fov: 60 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={0.7} />
      <Swirl />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}