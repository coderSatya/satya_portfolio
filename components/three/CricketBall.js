'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

function Ball() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Ball Body */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#b91c1c" roughness={0.3} metalness={0.2} />
      </Sphere>
      
      {/* Seam (simplified) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.01, 0.03, 16, 100]} />
        <meshStandardMaterial color="#fcd34d" emissive="#fcd34d" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function CricketBall() {
  return (
    <div className="w-full h-[300px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Ball />
        </Float>
      </Canvas>
    </div>
  );
}
