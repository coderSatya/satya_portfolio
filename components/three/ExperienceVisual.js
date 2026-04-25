'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingNode({ position, color, size, speed }) {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    mesh.current.rotation.x = t * speed * 0.5;
    mesh.current.rotation.z = t * speed * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <Sphere args={[size, 16, 16]}>
        <meshBasicMaterial color={color} transparent opacity={0.15} wireframe />
      </Sphere>
    </mesh>
  );
}

function ExperienceNodes() {
  const nodes = useMemo(() => {
    const results = [];
    const colors = ['#00f5ff', '#8b5cf6', '#10b981'];
    for (let i = 0; i < 15; i++) {
        results.push({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ],
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 0.1 + Math.random() * 0.2,
            speed: 0.2 + Math.random() * 0.5
        });
    }
    return results;
  }, []);

  return (
    <>
      {nodes.map((node, i) => (
        <FloatingNode key={i} {...node} />
      ))}
    </>
  );
}

export default function ExperienceVisual() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ExperienceNodes />
      </Canvas>
    </div>
  );
}
