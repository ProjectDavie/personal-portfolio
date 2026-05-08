// ===============================================
// components/SceneCanvas.tsx
// ===============================================

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "@/components/Model";

export default function SceneCanvas() {
  return (
    <div
      className="
        fixed
        inset-0
        w-screen
        h-screen
        z-[999]
        pointer-events-none
        overflow-hidden
      "
    >
      <Canvas
        camera={{
          /*
            X:
            negative = camera looks more LEFT
            positive = camera looks more RIGHT

            Y:
            positive = camera higher
            negative = camera lower

            Z:
            smaller = zoom in
            bigger = zoom out
          */
          position: [-1.8, 0.2, 8],

          /*
            portrait cinematic zoom
          */
          fov: 26,
        }}
      >

        {/* =========================================
            LIGHTING
        ========================================= */}

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