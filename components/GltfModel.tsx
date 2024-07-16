// components/GltfModel.tsx
"use client"

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  path: string;
  scale?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ path, scale = [1, 1, 1] }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
};

interface GltfModelProps {
  path: string;
  scale?: [number, number, number];
}

const GltfModel: React.FC<GltfModelProps> = ({ path, scale = [1, 1,1] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    checkWindowSize(); // Initial check

    // Add listener for window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkWindowSize);

      // Clean up listener
      return () => window.removeEventListener('resize', checkWindowSize);
    }
  }, []);

  if (isMobile) {
    return null; // Render nothing on small devices
  }

  return (
    <Canvas 
      className='mt-20 mx-40'
      style={{ height: '600px', width: '500px' }}
      camera={{ position: [80, 190, 225] }}
      shadows={true}
      gl={{ antialias: true }}
      pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1} // Adjust pixel ratio for smooth rendering
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model path={path} scale={scale} />
      <OrbitControls />
    </Canvas>
  );
};

export default GltfModel;
