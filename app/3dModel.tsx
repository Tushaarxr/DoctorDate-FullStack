// pages/three-d-model.tsx

"use client";
import React from 'react';
import GltfModel from '../components/GltfModel';

const ThreeDModelPage: React.FC = () => {
  return (
    <div>
      
      <GltfModel path="/3dmodel/scene.gltf" />
    </div>
  );
};

export default ThreeDModelPage;
