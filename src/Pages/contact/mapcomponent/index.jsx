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

    // Lat long for US :-  33.52795416562918, -117.76981372884481
      L.marker([33.52795416562918, -117.76981372884481], { icon: customIcon }).addTo(map)
        .bindPopup('Laguna Beach, California');
  
        L.marker([17.441738, 78.361590], { icon: customIcon }).addTo(map)
        .bindPopup('Hyderabad');
   // Lat long Singapore :- 1.4353657128311017, 103.80325607558518
        L.marker([1.4353657128311017, 103.80325607558518], { icon: customIcon }).addTo(map)
        .bindPopup('Singapore');

        // Repeat the map marker focus in a loop
    
        const locations = [
                              { lat: 33.52795416562918, lng: -117.76981372884481, popup: 'Laguna Beach, California' },
                              { lat: 17.441738, lng: 78.361590, popup: 'Hyderabad' },
                              { lat: 1.4353657128311017, lng: 103.80325607558518, popup: 'Singapore' },
                            ];

           let index = 0;
        setInterval(() => {
          map.setView([locations[index].lat, locations[index].lng], 10);
          index = (index + 1) % locations.length;
        }, 5000); // Change view every 5 seconds

    // 
  
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map-container" style={{ width: '100%', height: '100%',zIndex:0 }}></div>;
}

export default MapComponent;
