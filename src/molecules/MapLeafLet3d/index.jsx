// import React from 'react'
// import ReactDOM from "react-dom";
// import  { useEffect, useRef } from "react";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { degToRad } from "three/src/math/MathUtils";
// import { Vector2 } from "three";
// import "./styles.css";

// import { Html } from '@react-three/drei';

// import LeafletCanvasMap from '../leafLet';

// import { OrbitControls } from '@react-three/drei';

// let gridSize = 16;
// const canvasSize = 512;

// function drawCell(ctx, gridSize, canvasSize, cellX, cellY, color = "yellow") {
//   ctx.fillStyle = color;
//   ctx.fillRect(
//     cellX * (canvasSize / gridSize),
//     cellY * (canvasSize / gridSize),
//     canvasSize / gridSize,
//     canvasSize / gridSize
//   );
// }

// function drawGrid(ctx, gridSize, canvasSize) {
//   for (let i = 0; i < gridSize + 1; i++) {
//     const x = i * (canvasSize / gridSize);
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "green";
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, canvasSize);
//     ctx.moveTo(0, x);
//     ctx.lineTo(canvasSize, x);
//     ctx.stroke();
//   }
// }

// function drawLine(ctx, time, canvasSize) {
//   const x = ((time * canvasSize) / gridSize) % canvasSize;
//   ctx.beginPath();
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "white";
//   ctx.moveTo(x, 0);
//   ctx.lineTo(x, canvasSize);
//   ctx.stroke();
// }

// function GridBox(props) {
//   const canvasRef = useRef(document.createElement("canvas"));
//   const textureRef = useRef();
//   const group = useRef();
//   const mouseUV = useRef(new Vector2());
//   const context = useRef(canvasRef.current.getContext("2d"));

//   useFrame(({ clock }) => {
//     canvasRef.current.width = canvasSize;
//     canvasRef.current.height = canvasSize;
//     let ctx = context.current;
//     ctx.clearRect(0, 0, canvasSize, canvasSize);

//     drawGrid(ctx, gridSize, canvasSize);
//     // drawLine(ctx, clock.getElapsedTime(), canvasSize);

//     if (textureRef.current) {
//       textureRef.current.needsUpdate = true;
//     }
//     // group.current.rotateX(0.007);
//     // group.current.rotateZ(-0.007);
//   });

//   return (
//     <group ref={group} {...props}>
//       <mesh
//         rotation={[0, degToRad(45), degToRad(45)]}
//         onPointerMove={(e) => (mouseUV.current = e.uv)}
//         onPointerOver={() => (document.body.style = "cursor: none;")}
//         onPointerOut={() => (document.body.style = "cursor: pointer;")}
//       >
//         <boxGeometry args={[3, 3, 3]} />
//         <meshBasicMaterial>
//           <canvasTexture
//             ref={textureRef}
//             attach="map"
//             image={canvasRef.current}
            
//           />
// {/* 
//           <Html>
//           <LeafletCanvasMap/>
//           </Html> */}
//         </meshBasicMaterial>
//       </mesh>
//     </group>
//   );
// }

// const App = () => {
//   return (
//     <Canvas shadows>
//       <ambientLight />
//       <GridBox />
//       <OrbitControls/>
//     </Canvas>
//   );
// };


// export default App;


// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { degToRad } from 'three/src/math/MathUtils';
// import { Html } from '@react-three/drei';
// import { RenderTexture } from '@react-three/drei';
// import LeafletCanvasMap from '../leafLet';
// import { OrbitControls } from '@react-three/drei';

// function GridBox(props) {
//   const group = useRef();
//   const mouseUV = useRef();

//   useFrame(() => {
//     // Uncomment the lines below if you want to apply animations to the group
//     // group.current.rotateX(0.007);
//     // group.current.rotateZ(-0.007);
//   });

//   return (
//     <group ref={group} {...props}>
//       <mesh
//         rotation={[0, degToRad(45), degToRad(45)]}
//         onPointerMove={(e) => (mouseUV.current = e.uv)}
//         onPointerOver={() => (document.body.style = 'cursor: none;')}
//         onPointerOut={() => (document.body.style = 'cursor: pointer;')}
//       >
//         <boxGeometry args={[3, 3, 3]} />
//         <meshBasicMaterial>
//           {/* Use the Html component to render LeafletCanvasMap */}
//           <RenderTexture attach={"map"}>
//           <Html >
//             {/* <LeafletCanvasMap /> */}
//             <div style={{background:"white"}}>hello there</div>
//           </Html>
//             </RenderTexture>
//         </meshBasicMaterial>
//       </mesh>
//     </group>
//   );
// }

// const App = () => {
//   return (
//     <Canvas shadows>
//       <ambientLight />
//       <GridBox />
//       <OrbitControls></OrbitControls>
//     </Canvas>
//   );
// };

// export default App;


import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import LeafletCanvasMap from '../leafLet'
function Model(props) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <LeafletCanvasMap />
                <div> gekki</div>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }} style={{width:"100vw",height:"100vh"}}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}

