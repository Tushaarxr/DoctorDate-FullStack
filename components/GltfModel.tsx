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

const GltfModel: React.FC<GltfModelProps> = ({ path, scale = [1, 1, 1] }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      if (typeof window !== 'undefined') {
        setIsLargeScreen(window.innerWidth > 1240);
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

  if (!isLargeScreen) {
    return null; // Render nothing on small devices
  }

  return (
    <div className="canvas-container">
      <Canvas 
        className='canvas'
        style={{ height: '600px', width: '500px' }}
        camera={{ position: [80, 190, 225] }}
        shadows={true}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model path={path} scale={scale} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GltfModel;
