import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={meshRef} scale={1.8} position={[0, -1.5, 0]}>
        
        {/* Mic Head (Capsule) */}
        <mesh position={[0, 1.8, 0]}>
          <capsuleGeometry args={[0.6, 1.2, 32, 64]} />
          <meshPhysicalMaterial 
            color="#2a2a2a" 
            metalness={0.9} 
            roughness={0.4} 
            wireframe={true}
          />
        </mesh>
        
        {/* Mic Inner Glowing Core */}
        <mesh position={[0, 1.8, 0]}>
          <capsuleGeometry args={[0.55, 1.1, 32, 32]} />
          <meshPhysicalMaterial 
            color="#1ed760"
            emissive="#1ed760"
            emissiveIntensity={1.5}
            transparent={true}
            opacity={0.8}
          />
        </mesh>

        {/* Mic Ring / Clip */}
        <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.08, 16, 64]} />
          <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Mic Stand Pole */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Mic Base */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[1, 1, 0.1, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.5} />
        </mesh>
        
      </group>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="hero-3d-container">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff0000" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#8e0100" />
        <AnimatedShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
