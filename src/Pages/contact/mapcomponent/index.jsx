import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  useEffect(() => {
    const map = L.map('map-container',{ zoomControl: false,scrollWheelZoom: false }).setView([17.441738, 78.361590],10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);
        // Disable map dragging
        map.dragging.disable();

        // Disable touch zoom
        map.touchZoom.disable();
    
    
      L.control.zoom({ position: 'bottomright' }).addTo(map);
    const customIcon = L.icon({
        iconUrl: '/Images/location pin.png', 
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
      });
      L.marker([36.7783, -119.4179], { icon: customIcon }).addTo(map)
        .bindPopup('Custom marker location');
  
        L.marker([17.441738, 78.361590], { icon: customIcon }).addTo(map)
        .bindPopup('Custom marker location');
  
        L.marker([1.3521,103.8198], { icon: customIcon }).addTo(map)
        .bindPopup('Custom marker location');
  
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map-container" style={{ width: '100%', height: '100%',zIndex:1 }}></div>;
}

export default MapComponent;
