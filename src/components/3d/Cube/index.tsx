import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Cube = () => {
  const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<Mesh>(null!);

    useFrame(() => {
      ref.current.rotation.x += 0.01;
    });

    return (
      <mesh ref={ref} scale={2} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  };
};
