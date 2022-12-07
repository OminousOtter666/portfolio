import React from "react";
import topo_map from "../assets/topo_map.png";
import grad from "../assets/grad.png";
import "../styles/Map.css";
import Marker from "./Marker";
import { data } from "../assets/data";

export default function Map() {
  return (
    <div className="map-container">
      <div className="header-container">
        <div className="heading">Map of the Ominous Otter Traversal!</div>
        <div className="subheading">
          Welcome hiker! This page serves as my guide to the Ominous Otter
          traversal trail! Each icon represents an important landmark in the
          journey. Scroll down and click on the icons to explore the key sights
          along the trail!
        </div>
      </div>
      <img src={grad} alt="background gradient" className="background-grad" />
      <img src={topo_map} alt="topo map" className="topo_img" />
      {data.map((elt) => {
        return <Marker key={elt.id} data={elt} />;
      })}
    </div>
  );
}
