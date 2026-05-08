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
  */

  x: 1.6,

  y: -2.3,

  /*
    LANDING POSITION
  */

  endX: -3.8,

  endY: -5.2,

  /*
    START FACING CAMERA
  */

  rotationY: 0,

  /*
    TARGET ROTATION
    90 during movement
  */

  targetRotation: 90,

  /*
    FINAL LANDING ROTATION
    slightly angled instead of full side
  */

  landingRotation: 35,

  /*
    SPIN VALUE
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
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,

      start: "top top",

      end: "bottom bottom",

      scrub: 1.2,
    },
  });

  /*
    =========================================
    MOVE DIAGONALLY
  =========================================
  */

  tl.to(animation.current, {
    x: animation.current.endX,

    y: animation.current.endY,

    duration: 1,
  });

  /*
    =========================================
    ROTATE TO SIDE
    while moving
  =========================================
  */

  tl.to(
    animation.current,
    {
      rotationY:
        animation.current.targetRotation,

      duration: 0.45,
    },
    0
  );

  /*
    =========================================
    REDUCE ANGLE BEFORE LANDING
  =========================================
  */

  tl.to(
    animation.current,
    {
      rotationY:
        animation.current.landingRotation,

      duration: 0.35,
    },
    0.65
  );

  /*
    =========================================
    360 SPIN
  =========================================
  */

  tl.to(
    animation.current,
    {
      spin: 360,

      duration: 0.7,
    },
    0
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
      Math.sin(state.clock.elapsedTime * 2) *
      0.02;

    /*
      SUBTLE TILT
    */

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 2) *
      0.04;
  });

  return (
    <group
      ref={group}

      /*
        40% SMALLER
      */

      scale={0.023}

      /*
        INITIAL POSITION
      */

      position={[1.6, -2.3, 0]}
    >
      <primitive object={idleFbx} />
    </group>
  );
}