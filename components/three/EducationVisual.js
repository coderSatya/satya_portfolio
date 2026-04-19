'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function KnowledgeNet({ count = 200 }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate random points in a cloud
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  // Handle animation and mouse interaction
  useFrame((state) => {
    const { mouse, clock } = state;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mouse.y * 0.2,
        0.1
      );
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(
        pointsRef.current.rotation.y,
        mouse.x * 0.2,
        0.1
      );
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f472b6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Decorative lines could be added here for a more "network" feel, 
          but keeping it light for performance */}
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#00f5ff" wireframe opacity={0.1} transparent />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[4, -2, -1]}>
          <tetrahedronGeometry args={[0.6, 0]} />
          <meshBasicMaterial color="#8b5cf6" wireframe opacity={0.1} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function EducationVisual() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <KnowledgeNet />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
