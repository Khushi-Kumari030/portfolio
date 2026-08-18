"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HollowCube() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 7.8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const orangePointLight = new THREE.PointLight(0xff6b35, 5, 25);
    orangePointLight.position.set(0, -1.5, 3);
    scene.add(orangePointLight);

    const topDirectionalLight = new THREE.DirectionalLight(0xf29b70, 1.8);
    topDirectionalLight.position.set(3, 6, 4);
    scene.add(topDirectionalLight);

    // ==========================================
    // FIXED VERTEX PIVOT HIERARCHY
    // ==========================================
    // 1. Fixed Anchor Group (Stays stationary at fixed world position)
    const fixedAnchorGroup = new THREE.Group();
    // Tilt the fixed anchor slightly so the lateral rotation swings diagonally/laterally in 3D
    fixedAnchorGroup.position.set(0, -0.4, 0);
    fixedAnchorGroup.rotation.z = Math.PI * 0.12;
    fixedAnchorGroup.rotation.x = Math.PI * 0.15;
    scene.add(fixedAnchorGroup);

    // 2. Lateral Pivot Group (Rotates exclusively around its local Y-axis passing through the pinned vertex)
    const lateralPivotGroup = new THREE.Group();
    fixedAnchorGroup.add(lateralPivotGroup);

    // Cube Dimensions
    const cubeSize = 2.0;

    // 3. Cube Geometry translated so that vertex (-cubeSize/2, -cubeSize/2, -cubeSize/2)
    // is placed EXACTLY at (0,0,0) in local lateralPivotGroup space!
    const halfSize = cubeSize / 2;
    const boxGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    boxGeometry.translate(halfSize, halfSize, halfSize);

    // Semi-transparent glassy faces
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x151412,
      emissive: 0xff6b35,
      emissiveIntensity: 0.04,
      transparent: true,
      opacity: 0.07,
      roughness: 0.15,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const glassMesh = new THREE.Mesh(boxGeometry, glassMaterial);
    lateralPivotGroup.add(glassMesh);

    // Glowing Burnt-Orange Outer Edges
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff6b35,
      linewidth: 2,
      transparent: true,
      opacity: 0.95
    });
    const lineSegments = new THREE.LineSegments(edgesGeometry, lineMaterial);
    lateralPivotGroup.add(lineSegments);

    // Nested Inner Wireframe Lattice
    const innerSize = cubeSize * 0.65;
    const innerBoxGeometry = new THREE.BoxGeometry(innerSize, innerSize, innerSize);
    innerBoxGeometry.translate(halfSize, halfSize, halfSize);
    const innerEdges = new THREE.EdgesGeometry(innerBoxGeometry);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: 0xf29b70,
      transparent: true,
      opacity: 0.35
    });
    const innerLines = new THREE.LineSegments(innerEdges, innerLineMat);
    lateralPivotGroup.add(innerLines);

    // Corner Vertex Spheres
    const vertexPositions = [
      [0, 0, 0], // The PINNED FIXED VERTEX!
      [cubeSize, 0, 0],
      [0, cubeSize, 0],
      [0, 0, cubeSize],
      [cubeSize, cubeSize, 0],
      [cubeSize, 0, cubeSize],
      [0, cubeSize, cubeSize],
      [cubeSize, cubeSize, cubeSize],
    ];

    const normalSphereGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const normalSphereMat = new THREE.MeshBasicMaterial({ color: 0xff6b35 });
    
    // The stationary anchor vertex sphere (visual indicator of pinned corner)
    const anchorSphereGeo = new THREE.SphereGeometry(0.08, 20, 20);
    const anchorSphereMat = new THREE.MeshBasicMaterial({ color: 0xf5efe6 });
    
    // Add stationary anchor sphere directly to fixedAnchorGroup at (0,0,0)
    const pinnedVertexNode = new THREE.Mesh(anchorSphereGeo, anchorSphereMat);
    pinnedVertexNode.position.set(0, 0, 0);
    fixedAnchorGroup.add(pinnedVertexNode);

    // Add remaining vertex spheres to lateralPivotGroup
    vertexPositions.slice(1).forEach((pos) => {
      const sphere = new THREE.Mesh(normalSphereGeo, normalSphereMat);
      sphere.position.set(pos[0], pos[1], pos[2]);
      lateralPivotGroup.add(sphere);
    });

    // Orbital Ring around the fixed pivot anchor
    const ringGeometry = new THREE.TorusGeometry(3.2, 0.008, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      transparent: true,
      opacity: 0.18,
    });
    const orbitRing = new THREE.Mesh(ringGeometry, ringMaterial);
    orbitRing.rotation.x = Math.PI / 2.2;
    fixedAnchorGroup.add(orbitRing);

    // Orbiting Halo Particles around the anchor
    const particleCount = 80;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff6b35,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMat);
    scene.add(particleCloud);

    // Mouse Parallax (subtle, smoothly applied to scene camera without disturbing the anchored vertex)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      // Smooth Camera Parallax (dampened)
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      camera.position.x = mouseX * 1.5;
      camera.position.y = 1.2 + mouseY * -1.2;
      camera.lookAt(0, -0.2, 0);

      // ==========================================
      // CONTROLLED LATERAL ROTATION AROUND FIXED VERTEX
      // The vertex at (0,0,0) stays anchored in space!
      // The entire cube swings laterally around it.
      // ==========================================
      const rotationSpeed = isHovered ? 0.45 : 0.32;
      lateralPivotGroup.rotation.y += delta * rotationSpeed;

      // Slow orbital drift of background particles
      particleCloud.rotation.y += delta * 0.05;

      // Hover glow enhancement
      lineMaterial.opacity = isHovered ? 1.0 : 0.9;
      orangePointLight.intensity = isHovered ? 6.5 : 5.0;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      boxGeometry.dispose();
      edgesGeometry.dispose();
      innerBoxGeometry.dispose();
      innerEdges.dispose();
      normalSphereGeo.dispose();
      anchorSphereGeo.dispose();
      ringGeometry.dispose();
      particleGeometry.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isHovered]);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-center justify-center cursor-default select-none"
    >
      {/* Soft Bottom Orange Ambient Spotlight */}
      <div className="absolute bottom-6 w-36 h-10 bg-[#FF6B35]/20 blur-2xl rounded-full pointer-events-none" />
      
      {/* Minimal Tech Coordinates Overlay */}
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#A8A098]/50 tracking-wider hidden sm:block pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse"></span>
          <span>PINNED VERTEX PIVOT</span>
        </div>
      </div>
    </div>
  );
}

