import React from "react";
import { Link } from "react-router-dom";
import "./App";
import Projects from "./Projects";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className={props.image}>
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
