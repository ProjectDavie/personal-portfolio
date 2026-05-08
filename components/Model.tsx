// ===============================================
// components/Model.tsx
// ===============================================

"use client";

import React, {
  useEffect,
  useRef,
} from "react";

import { useFBX } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const group = useRef<THREE.Group>(null);

  const mixer = useRef<THREE.AnimationMixer | null>(null);

  const idleFbx = useFBX("/models/Idle.fbx");

  /*
    =========================================
    MAIN CONTROLS
  =========================================
  */

  // =========================================
// MAIN CONTROLS
// =========================================

const animation = useRef({
  /*
    START POSITION
    top-right hero area
  */

  x: 1.15,
  y: 1.1,

  /*
    FINAL LANDING
    beside project cards
  */

  endX: -2.8,
  endY: -3.7,

  /*
    START FACING LEFT
  */

  rotationY: -90,

  /*
    FINAL FACING RIGHT
  */

  finalRotation: 180,

  /*
    TOTAL SPIN
  */

  spin: 0,
});

  /*
    =========================================
    LOAD FBX
  =========================================
  */

  useEffect(() => {
    if (!idleFbx || !idleFbx.animations.length) return;

    mixer.current =
      new THREE.AnimationMixer(idleFbx);

    const idleAction =
      mixer.current.clipAction(
        idleFbx.animations[0]
      );

    idleAction.play();

    return () => {
      mixer.current?.stopAllAction();
    };
  }, [idleFbx]);

  /*
    =========================================
    GSAP SCROLL TIMELINE
  =========================================
  */

  useEffect(() => {
  const section =
    document.querySelector("#cinematic-section");

  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top top",

      end: "bottom bottom",

      scrub: 1.4,
    },
  });

  /*
    =========================================
    DIAGONAL TRAVEL
  =========================================
  */

  tl.to(animation.current, {
    x: animation.current.endX,

    y: animation.current.endY,

    duration: 1,

    ease: "power2.out",
  });

  /*
    =========================================
    270 DEGREE SPIN
  =========================================
  */

  tl.to(
    animation.current,
    {
      spin: 270,

      duration: 0.7,

      ease: "power3.out",
    },
    0.05
  );

  /*
    =========================================
    FINAL LANDING ROTATION
  =========================================
  */

  tl.to(
    animation.current,
    {
      rotationY:
        animation.current.finalRotation,

      duration: 0.45,

      ease: "expo.out",
    },
    0.55
  );

  return () => {
    tl.kill();
  };
}, []);

  /*
    =========================================
    FRAME LOOP
  =========================================
  */

  useFrame((state, delta) => {
    mixer.current?.update(delta);

    if (!group.current) return;

    /*
      POSITION
    */

    group.current.position.x =
      animation.current.x;

    group.current.position.y =
      animation.current.y;

    /*
      ROTATION
    */

    group.current.rotation.y =
  THREE.MathUtils.degToRad(
    animation.current.rotationY +
      animation.current.spin
  );

    /*
      FLOATING
    */

    group.current.position.y +=
  Math.sin(state.clock.elapsedTime * 1.8) *
  0.045;

    /*
      SUBTLE TILT
    */

    group.current.rotation.z =
  Math.sin(state.clock.elapsedTime * 1.5) *
  0.025;
  });

  return (
    <group
      ref={group}

      /*
        40% SMALLER
      */

      scale={0.014}

      /*
        INITIAL POSITION
      */

      position={[1.15, 1.1, 0]}
    >
      <primitive object={idleFbx} />
    </group>
  );
}