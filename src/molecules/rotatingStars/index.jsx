import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const RotatingStars1 = ({ rotationSpeed = 0.0005 }) => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
    //   starsRef.current.rotation.x += rotationSpeed;
      starsRef.current.rotation.z += rotationSpeed;
    }
  });

  return <Stars ref={starsRef} fade={true} />;
};

const RotatingStars = () => {
  return (
    <Canvas style={{ position: 'absolute', width: '100vw', height: '100vh', background: 'black', zIndex: -1 }}>
      <RotatingStars1 />
    </Canvas>
  );
};

export default RotatingStars;
