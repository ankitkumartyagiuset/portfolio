"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Scene() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.6}>
        <Icosahedron args={[1.2, 2]} position={[-2.5, 0.8, -1]}>
          <MeshDistortMaterial color="#22d3ee" distort={0.25} speed={1.7} transparent opacity={0.35} />
        </Icosahedron>
      </Float>
      <Float speed={1.2} rotationIntensity={0.9} floatIntensity={1.1}>
        <mesh position={[2.1, -0.6, -1.3]}>
          <boxGeometry args={[1.1, 1.1, 1.1]} />
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.3} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={1} floatIntensity={1.4}>
        <mesh position={[0.3, 1.7, -2]}>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>
      <ambientLight intensity={1.2} />
      <pointLight position={[4, 3, 3]} intensity={14} color="#60a5fa" />
      <pointLight position={[-4, -2, 2]} intensity={8} color="#a78bfa" />
    </group>
  );
}

export default function FloatingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.2),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(34,211,238,0.2),transparent_50%)]" />
    </div>
  );
}
