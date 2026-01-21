
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera, useGLTF, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { Mesh, Group, MathUtils } from 'three';
import AnimatedCard from '../common/AnimatedCard';

// Android Model component
const AndroidModel = () => {
  const group = useRef<Group>(null);
  
  // Simple Android robot using primitives since we don't have a model file
  useFrame((state) => {
    if (group.current) {
      // Gentle floating animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group}>
      {/* Android Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 0.8, 10, 16]} />
        <meshStandardMaterial 
          color="#3DDC84" // Android Green
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      
      {/* Android Head */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#3DDC84" 
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      
      {/* Android Eyes */}
      <mesh position={[-0.2, 0.9, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.2, 0.9, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Android Arms */}
      <mesh position={[-0.75, 0, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.15, 0.7, 5, 16]} />
        <meshStandardMaterial 
          color="#3DDC84"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.75, 0, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.15, 0.7, 5, 16]} />
        <meshStandardMaterial 
          color="#3DDC84"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      
      {/* Android Legs */}
      <mesh position={[-0.3, -0.75, 0]} rotation={[0, 0, 0.1]}>
        <capsuleGeometry args={[0.15, 0.7, 5, 16]} />
        <meshStandardMaterial 
          color="#3DDC84"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.3, -0.75, 0]} rotation={[0, 0, -0.1]}>
        <capsuleGeometry args={[0.15, 0.7, 5, 16]} />
        <meshStandardMaterial 
          color="#3DDC84"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
};

// Orbiting particles around the Android
const OrbitingElements = () => {
  const particlesRef = useRef<Group>(null);
  const count = 50;
  
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      radius: 2 + Math.random() * 2,
      speed: 0.01 + Math.random() * 0.02,
      rotationOffset: Math.random() * Math.PI * 2,
      yOffset: (Math.random() - 0.5) * 2,
      size: 0.02 + Math.random() * 0.05,
      color: i % 2 === 0 ? "#3B82F6" : "#3DDC84" // Alternate blue and green
    }));
  }, [count]);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
    
    // Update each particle position based on time
    particles.forEach((particle, i) => {
      const mesh = particlesRef.current?.children[i] as Mesh;
      if (mesh) {
        const time = state.clock.getElapsedTime();
        mesh.position.x = Math.cos(time * particle.speed + particle.rotationOffset) * particle.radius;
        mesh.position.z = Math.sin(time * particle.speed + particle.rotationOffset) * particle.radius;
        mesh.position.y = particle.yOffset;
      }
    });
  });
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

// Tech Grid for the background
const TechGrid = () => {
  const gridRef = useRef<Group>(null);
  
  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.x += 0.0005;
      gridRef.current.rotation.y += 0.0005;
    }
  });
  
  return (
    <group ref={gridRef} scale={[3, 3, 3]} position={[0, 0, -5]}>
      <gridHelper args={[15, 15, "#3B82F6", "#3DDC84"]} />
      <gridHelper args={[15, 15, "#3DDC84", "#3B82F6"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

// Glow Sphere around Android
const GlowSphere = () => {
  return (
    <mesh scale={[1.8, 1.8, 1.8]} position={[0, 0.2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshTransmissionMaterial
        backside={true}
        samples={4}
        thickness={0.5}
        roughness={0.1}
        envMapIntensity={0.1}
        clearcoat={0.1}
        clearcoatRoughness={0.1}
        transmission={1}
        chromaticAberration={0.1}
        anisotropicBlur={0.1}
        color="#3DDC84"
        opacity={0.05}
        transparent={true}
        distortionScale={0}
        temporalDistortion={0}
      />
    </mesh>
  );
};

// Main component with new Android 3D scene
const TechGlobe = () => {
  return (
    <AnimatedCard className="my-16">
      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
        {/* Gradient background with Android colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-emerald-900/40 to-green-900/50 z-0" />
        
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1} 
            castShadow 
          />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#3DDC84" />
          <directionalLight position={[5, -5, 5]} intensity={0.3} color="#3B82F6" />
          
          {/* 3D Elements */}
          <AndroidModel />
          <GlowSphere />
          <TechGrid />
          <OrbitingElements />
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
          
          <Environment preset="city" />
        </Canvas>

        {/* Overlay text */}
        <div className="absolute top-0 left-0 w-full p-6 z-10 text-center">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            Android App Development Expertise
          </h3>
          <p className="text-white/80 text-sm mt-2 max-w-md mx-auto drop-shadow-md">
            Transforming ideas into powerful Android applications
          </p>
        </div>
        
        {/* Tech decorations */}
        <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border border-green-400/20 animate-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-blue-400/20 animate-pulse"></div>
      </div>
    </AnimatedCard>
  );
};

export default TechGlobe;
