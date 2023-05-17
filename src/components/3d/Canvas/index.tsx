import { Canvas } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Camera } from 'three';

export default function CustomCanvas() {
  const cameraRef = useRef<Camera>(null);

  return (
    <Canvas>
      <ambientLight />
      <directionalLight />
      {/* 카메라와 컨트롤러 */}
      {/*<PerspectiveCamera
        ref={cameraRef}
        makeDefault={true}
        position={[0, 0, 50]}
      />
      <OrbitControls
        camera={cameraRef.current}
        makeDefault={true}
        enableZoom={false}
      />*/}
      <Suspense fallback={null}>
        <div></div>
      </Suspense>
    </Canvas>
  );
}
