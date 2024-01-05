import React, { useEffect, useRef } from "react";
import L from "leaflet";
import data from "./map.json";
import "leaflet/dist/leaflet.css";
// import NodeGeocoder from "node-geocoder"
import Img from "../../components/Image";
const LeafletCanvasMap = () => {
  const mapContainerRef = useRef(null);

  console.log(data);
  useEffect(() => {

    // let geocoder = node_geocoder(options);
    let greenIcon = L.icon({
      iconUrl: "Icons/map.png",

      iconSize: [10, 10],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    const map = L.map(mapContainerRef.current, {
      preferCanvas: true,
      renderer: L.canvas(),
      center: [36.1699, -95.1398],
      zoom: 5,
    });
    let hashmap = {}
    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    data.features.map((e) => {
      let lat = e.properties.latitude.toString();

      let long = e.properties.longitude.toString();
      let name = long+lat;
      hashmap[name] = e.properties.name
      console.log(e.properties.name)
      L.marker([e.properties.latitude, e.properties.longitude], {
        icon: greenIcon,
      })
        .addTo(map)
        .on("click", function (e) {
          let lat2 = e.latlng["lat"]
          let long2 = e.latlng["lng"]
          let name2 = long2.toString()+lat2.toString();
          console.log(hashmap[name2])
        });
    });
  }, []);

  return <div ref={mapContainerRef} style={{ height: "1080px" }}></div>;
};

export default LeafletCanvasMap;
