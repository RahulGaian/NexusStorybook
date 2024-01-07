import React, { useEffect, useRef } from "react";
import L from "leaflet";
import data from "./map.json";
import "leaflet/dist/leaflet.css";
// import NodeGeocoder from "node-geocoder"
import { useState } from "react";
import { useMemo } from "react";
import Img from "../../components/Image";

const LeafletCanvasMap = ({stateList,listUpdater}) => {
  const mapContainerRef = useRef(null);
  let layers = {}

  useEffect(() => 
  {
    let hashmap = {}
    let isSmallLaptop = window.innerWidth<1400 && window.innerWidth>900?true:false;
    let isMobile = window.innerWidth<900?true:false;

    // let geocoder = node_geocoder(options);
    let greenIcon = L.icon({
      iconUrl: "Icons/map.png",

      iconSize: [25, 25],
      // iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    
 
    
    const map = L.map(mapContainerRef.current, {
      center: [36.1699, -95.1398],
      zoom:5
      // zoom: isSmallLaptop?4.5:isMobile?4.3:5,

      // minZoom: isSmallLaptop?3:isMobile?2:5,
      // maxZoom:isSmallLaptop?3:isMobile?2:5
      
    });
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

 

    let givenLocations = ["New York","Los Angeles","Chicago","Philadelphia","Dallas-Ft. Worth"]
    data.features.map((e) => {
      let lat = e.properties.latitude.toString(); 
      let long = e.properties.longitude.toString();   
      let name = long+lat;
      hashmap[name] = [e.properties.name,L.geoJSON(e.geometry)]
      let cityname = e.properties?.name?.toString().split(",")[0]
      layers[cityname] = L.geoJSON(e.geometry)
      // console.log(layers)

      if(givenLocations.includes(cityname)){

        L.marker([e.properties.latitude, e.properties.longitude], {
          icon: greenIcon,
        })
        .addTo(map)
        .on("click", function (e) {
          let lat2 = e.latlng["lat"]
          let long2 = e.latlng["lng"]
          let name2 = long2.toString()+lat2.toString();
          let cityname = hashmap[name2][0].split(",")[0]
          // console.log(cityname)
          map.addLayer(hashmap[name2][1])
          listUpdater(prevArr => [...prevArr,cityname])
        });
        
      }

  
    });
    stateList.map(e=>{
      console.log(layers[e])
      map.addLayer(layers[e])
    }
    )
    return ()=>{
      map.remove();
    }
  }, [stateList]);

  return <div ref={mapContainerRef} style={{ height: "inherit" }}></div>;
};

export default LeafletCanvasMap;
