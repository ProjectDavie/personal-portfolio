"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "@/components/Model";

export default function SceneCanvas() {
  return (
    <div
      className="
        absolute
        inset-0
        w-full
        h-full
        z-[60]
        pointer-events-none
        overflow-hidden
      "
    >
      <Canvas
        camera={{
          position: [0, 1.8, 10],
          fov: 32,
        }}
      >
        {/* LIGHTING */}

        <ambientLight intensity={2.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-5, 5, -5]}
          intensity={2}
        />

        <spotLight
          position={[0, 10, 10]}
          intensity={4}
          angle={0.4}
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}