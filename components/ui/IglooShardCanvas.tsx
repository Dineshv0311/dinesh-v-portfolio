"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const IglooShardCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Monolithic Crystalline Shard Geometry (The Iceberg Core)
    const shardGroup = new THREE.Group();
    scene.add(shardGroup);

    // Main Crystal Faceted Core
    const crystalGeo = new THREE.IcosahedronGeometry(6.2, 0);

    // Faceted Translucent Crystal Material
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x050d1a,
      emissive: 0x0a192f,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.5,
      thickness: 3.5,
      specularIntensity: 1.0,
      specularColor: 0x00d4ff,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });

    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    shardGroup.add(crystalMesh);

    // Wireframe Outer Cage (Crystalline Lattice)
    const wireframeGeo = new THREE.IcosahedronGeometry(6.28, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    shardGroup.add(wireframeMesh);

    // Inner Glowing Core
    const innerCoreGeo = new THREE.OctahedronGeometry(2.8, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    shardGroup.add(innerCoreMesh);

    // 3. Dynamic Lighting (Arctic Cyan & Violet Aurora Lights)
    const cyanLight = new THREE.PointLight(0x00d4ff, 80, 50);
    cyanLight.position.set(12, 12, 15);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x9333ea, 70, 50);
    violetLight.position.set(-14, -10, 10);
    scene.add(violetLight);

    const topWhiteLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topWhiteLight.position.set(0, 20, 10);
    scene.add(topWhiteLight);

    // 4. Floating Arctic Dust Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: Math.random() * 0.02 + 0.005,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 1.8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse Parallax & Movement Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 1.5;
      mouseY = -(y / rect.height) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate shard smoothly with sine wave bobbing
      shardGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.8;
      shardGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 - targetY * 0.6;
      shardGroup.rotation.z = Math.cos(elapsedTime * 0.15) * 0.08;
      shardGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.6;

      // Inner core reverse spin
      innerCoreMesh.rotation.y = -elapsedTime * 0.5;
      innerCoreMesh.rotation.x = elapsedTime * 0.3;

      // Light oscillation
      cyanLight.position.x = 12 + Math.sin(elapsedTime * 0.5) * 4;
      violetLight.position.y = -10 + Math.cos(elapsedTime * 0.4) * 4;

      // Move ambient particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleVelocities[i].y;
        positions[i * 3] += particleVelocities[i].x;

        // Reset if float above
        if (positions[i * 3 + 1] > 18) {
          positions[i * 3 + 1] = -18;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      crystalGeo.dispose();
      wireframeGeo.dispose();
      innerCoreGeo.dispose();
      particleGeo.dispose();
      crystalMat.dispose();
      wireframeMat.dispose();
      innerCoreMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
