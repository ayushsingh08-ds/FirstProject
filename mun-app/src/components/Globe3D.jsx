import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  return (
    <mesh>
      {/* Sphere Geometry for the Globe */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* Material with a texture */}
      <meshStandardMaterial
        map={new THREE.TextureLoader().load("/earth-texture.jpg")} // Add an earth texture image in the public folder
        normalMap={new THREE.TextureLoader().load("/earth-normal.jpg")} // Optional: Add a normal map for realistic lighting
      />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <Canvas style={{ height: "400px", width: "400px" }}>
      {/* Add Stars for a space effect */}
      <Stars />
      {/* Add Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      {/* Add the Globe */}
      <Globe />
      {/* Orbit Controls for interaction */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}