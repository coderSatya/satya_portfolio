'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, PerspectiveCamera, Text } from '@react-three/drei';

function BookModel() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Book Base (Cover) */}
      <Box args={[2, 3, 0.4]}>
        <meshStandardMaterial color="#1e40af" roughness={0.5} />
      </Box>
      
      {/* Pages Side */}
      <Box args={[1.9, 2.9, 0.41]} position={[0, 0, 0]}>
        <meshStandardMaterial color="white" />
      </Box>

      {/* Front Label stylized */}
      <Box args={[1.5, 2, 0.01]} position={[0, 0, 0.21]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      
      <Text
        position={[0, 0.3, 0.22]}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.4}
        textAlign="center"
      >
        FRONTEND MASTERY
      </Text>
    </group>
  );
}

export default function FloatingBook() {
  return (
    <div className="w-full h-[300px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <BookModel />
        </Float>
      </Canvas>
    </div>
  );
}
