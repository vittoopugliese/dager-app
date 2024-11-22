import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

export const ThreeReusable = ({model}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let divide = window.innerWidth < 474 ? 1.14 : 1.84;

    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth / divide,
      height: 400,
    };

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor("#141414");
    renderer.setPixelRatio(window.devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    // Modificaciones para fijar el modelo
    controls.enableDamping = false;  // Desactivar amortiguación
    controls.enablePan = false;      // Desactivar paneo
    controls.enableZoom = false;     // Desactivar zoom
    controls.enableRotate = false;   // Desactivar rotación manual
    controls.autoRotate = false;     // Desactivar rotación automática

    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader();

    textureLoader.load(`../textures/${model}.png`, (texture) => {
      objLoader.load(`../models/${model}.obj`, (object) => {
        object.rotation.x = Math.PI / 4;
        object.rotation.y = 0;  // Asegurar que no hay rotación en Y
        object.rotation.z = 0;  // Asegurar que no hay rotación en Z

        const material = new THREE.MeshStandardMaterial({ map: texture });

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        scene.add(object);

        // Animación inicial única
        const timeline = gsap.timeline({ defaults: { duration: 1 } });
        timeline.fromTo(
          object.scale, 
          { z: 0, x: 0, y: 0 }, 
          { z: 1, x: 1, y: 1 }
        );

        // Renderizar la escena una vez que el objeto está cargado
        renderScene();
      });
    });

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    // Modificar la función animate para solo actualizar cuando sea necesario
    const animate = () => {
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