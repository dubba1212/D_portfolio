import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Moon = () => {
  const groupRef = useRef();

  // Define keyframes for animation
  const keyframes = {
    "100%": {
      transform: "translateY(20px)",
    },
  };

  useEffect(() => {
    // Create a CSS keyframes animation rule
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes animate { ${Object.keys(keyframes).map((key) =>
        `${key} { ${Object.entries(keyframes[key])
          .map(([prop, value]) => `${prop}: ${value}`)
          .join("; ")}; }`
      ).join(" ")} }`
    );
  });

  return (
    <div
      className="w-full h-full max-w-[850px] max-h-[850px] absolute -bottom-34 lg:bottom-0 lg:right-[8%] margin:auto"
      style={{ animation: "animate 2s infinite ease alternate" }}
    >
      <div className="w-full lg:h-[850px] relative">
        {/* Place the Canvas behind the Image */}
        <Canvas style={{ position: "absolute", zIndex: -1, right: -20 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[0.9, 50, 100]} scale={[2, 2, 2]} position={[1, 0, 0]}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={1}
            />
          </Sphere>
        </Canvas>
        {/* Image component */}
      </div>
    </div>
  );
};

export default Moon;
