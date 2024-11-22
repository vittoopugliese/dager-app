import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

export const ThreeDee = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let divide = window.innerWidth < 474 ? 1.14 : 1.84;

    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth / divide,
      height: 400,
    };

    // Configuración de iluminación mejorada
    // Luz ambiental para iluminación general
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Luz principal direccional
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // Luz de relleno más suave
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 0, -5);
    scene.add(fillLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true // Mejora la calidad visual
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.physicallyCorrectLights = true; // Iluminación más realista

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader();

    textureLoader.load("./pickle.png", (texture) => {
      objLoader.load("./pickle.obj", (object) => {
        object.rotation.x = Math.PI / 4;

        // Material mejorado con propiedades físicas
        const material = new THREE.MeshStandardMaterial({ 
          map: texture,
          roughness: 0.7,    // Ajusta la rugosidad de la superficie
          metalness: 0.2,    // Ajusta el aspecto metálico
          envMapIntensity: 1 // Intensidad de reflejos ambientales
        });

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            child.castShadow = true;    // El objeto puede proyectar sombras
            child.receiveShadow = true;  // El objeto puede recibir sombras
          }
        });

        scene.add(object);

        const timeline = gsap.timeline({ defaults: { duration: 1 } });
        timeline.fromTo(
          object.scale, 
          { z: 0, x: 0, y: 0 }, 
          { z: 1, x: 1, y: 1 }
        );
      });
    });

    // Función para actualizar la posición de las luces
    const updateLights = () => {
      // Actualizar la posición de la luz principal relativa a la cámara
      const cameraPosition = new THREE.Vector3();
      camera.getWorldPosition(cameraPosition);
      
      mainLight.position.copy(cameraPosition);
      mainLight.position.y += 2;  // Mantener la luz ligeramente por encima
      
      // La luz de relleno se mantiene opuesta a la luz principal
      fillLight.position.copy(cameraPosition).multiplyScalar(-1);
    };

    const renderScene = () => {
      updateLights(); // Actualizar las luces antes de renderizar
      renderer.render(scene, camera);
    };

    const animate = () => {
      controls.update();
      renderScene();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      divide = window.innerWidth < 474 ? 1.14 : 1.84;
      sizes.width = window.innerWidth / divide;
      sizes.height = 400;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderScene();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="three-container">
      <canvas ref={canvasRef} className="webgl" />
    </div>
  );
};