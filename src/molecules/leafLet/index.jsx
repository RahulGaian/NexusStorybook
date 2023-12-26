// // import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// import L from "react-leaflet"
// import style from "./index.module.css"

// export default function LeafletComponent() {
//   return (
//     <MapContainer
//       className={style.map}
//       center={[51.0, 19.0]}
//       zoom={4}
//       maxZoom={18}
//       // preferCanvas={true}
//       // renderer={L.canvas()}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />

//     </MapContainer>
//   );
// }











// 2
// LeafletCanvasMap.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const LeafletCanvasMap = () => {
  const mapContainerRef = useRef(null);

  

  useEffect(() => {
    // Initialize map
    const map = L.map(mapContainerRef.current, {
      preferCanvas: true,
      renderer: L.canvas(),
      center: [51.505, -0.09],
      zoom: 13,
    });

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
  }, []);

  return <div ref={mapContainerRef} style={{ height: '1080px' }}></div>;
};

export default LeafletCanvasMap;














// 3
// LeafletCanvasMap.js
// import React, { useEffect, useRef } from 'react';


// const LeafletCanvasMap = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const map = L.map(canvasRef.current, {
//       // renderer: L.canvas(),
//       center: [51.505, -0.09],
//       zoom: 13,
//     });

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© OpenStreetMap contributors',
//     }).addTo(map);
//   }, []);

//   return <div ref={canvasRef} style={{ height: '400px', width: '100%' }} />;
// };

// export default LeafletCanvasMap;











// 4
// import React, { useRef, useEffect } from 'react';
// import html2canvas from 'html2canvas';

// const MapComponent = () => {
//   const divRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {




//     const captureAndDraw = async () => {
//       const divElement = divRef.current;
//       const canvasElement = canvasRef.current;


//       if (divElement && canvasElement) {
//         try {
//           const canvas = await html2canvas(divElement, { useCORS: true });

//           if (canvas.width && canvas.height) {
//             const ctx = canvasElement.getContext('2d');
//             if (ctx) {
//               ctx.drawImage(canvas, 0, 0);
//             }
//           } else {
//             console.error('Captured canvas has zero width or height.');
//           }
//         } catch (error) {
//           console.error('Error capturing or drawing:', error);
//         }
//       } else {
//         console.error('Canvas or div element is not available.');
//       }
//     };


//     captureAndDraw();

//   }, []);

//   return (
//     <div style={{ position: 'relative' }}>
//       {/* heloooooooooooo */}
//       <div
//         ref={divRef}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100px', // Adjust this if needed
//           height: '100px', // Adjust this if needed
//           // Add styles or content for Leaflet or other elements here
//         }}
//       >
//         {/* Your Leaflet or other content goes here */}
//         {/* This is the content that you want to copy onto the canvas */}
//              <MapContainer
//       className={style.map}
//       center={[51.0, 19.0]}
//       zoom={4}
//       maxZoom={18}
//       // preferCanvas={true}
//       // renderer={L.canvas()}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />

//     </MapContainer>
  
//       </div>
//       <canvas
//         ref={canvasRef}
//         width={400} // Set the desired width
//         height={500} // Set the desired height
//         style={{
//           position: 'relative',
//           marginTop: '400px',
//           top: 0,
//           right:0 ,
//           width: '1000px', // Adjust this if needed
//           height: '1000px', // Adjust this if needed
//         }}
//       ></canvas>
//     </div>
//   );
// };

// export default MapComponent;

