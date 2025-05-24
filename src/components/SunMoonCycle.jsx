import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function SunMoon() {
  const sunRef = useRef();
  const moonRef = useRef();
  const orbitRadius = 5; // Radius of the semicircle orbit

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * 0.2; // Adjust speed of rotation

    // Update Sun position
    sunRef.current.position.x = Math.cos(angle) * orbitRadius;
    sunRef.current.position.y = Math.sin(angle) * orbitRadius;

    // Update Moon position (opposite to Sun)
    moonRef.current.position.x = Math.cos(angle + Math.PI) * orbitRadius;
    moonRef.current.position.y = Math.sin(angle + Math.PI) * orbitRadius;
  });

  return (
    <>
      {/* Sun */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial emissive={"#f9d71c"} emissiveIntensity={1} />
      </mesh>

      {/* Moon */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial emissive={"#d3d3d3"} emissiveIntensity={0.5} />
      </mesh>
    </>
  );
}

export default function SunMoonCycle() {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }}>
      {/* Add Stars for the background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Sun and Moon */}
      <SunMoon />
    </Canvas>
  );
}