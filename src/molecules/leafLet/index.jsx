import React, { useEffect, useRef } from "react";
import L from "leaflet";
import data from "./map.json";
import "leaflet/dist/leaflet.css";
// import NodeGeocoder from "node-geocoder"
import Img from "../../components/Image";
const LeafletCanvasMap = ({listUpdater}) => {
  const mapContainerRef = useRef(null);
  console.log(data);
  useEffect(() => {
    let isSmallLaptop = window.innerWidth<1400 && window.innerWidth>900?true:false;
    let isMobile = window.innerWidth<900?true:false;

    // let geocoder = node_geocoder(options);
    let greenIcon = L.icon({
      iconUrl: "Icons/map.png",

      iconSize: [18, 18],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    const map = L.map(mapContainerRef.current, {
      center: [36.1699, -95.1398],
      zoom: isSmallLaptop?3:isMobile?2:5,
      minZoom: isSmallLaptop?3:isMobile?2:5,
      maxZoom:isSmallLaptop?3:isMobile?2:5
      
    });
    let hashmap = {}
    // Add a tile layer (OpenStreetMap)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution: "© OpenStreetMap contributors",
    // }).addTo(map);

    L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png","http://b.tile.openstreetmap.org/{z}/{x}/{y}.png","http://c.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // L.tileLayer('http://a.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png","http://b.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png","http://c.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png', {
    //   // maxZoom: 19,
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
    //   // bounds: [[46.2, -5.5], [50, 0.7]]
    // });

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
          listUpdater(prevArr => [...prevArr,hashmap[name2]])
        });
    });
  }, []);

  return <div ref={mapContainerRef} style={{ height: "inherit" }}></div>;
};

export default LeafletCanvasMap;
