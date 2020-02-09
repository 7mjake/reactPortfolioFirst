import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/dnmc-website-redesign"
        image="https://uploads-ssl.webflow.com/5dbf381e5ad64f4cba881162/5e24e194e27e8622292e39c1_Cover-p-800.jpeg"
        title="DNMC Website Redesign"
        category="UI/UX"
      />
      <Thumbnail
        link="/mathematician-expedition"
        image="https://uploads-ssl.webflow.com/5dbf381e5ad64f4cba881162/5dc2278006669b0a8a003e1e_ME%20Cover%20Mobile-p-1080.jpeg"
        title="Mathematician Expedition"
        category="UI/UX"
      />
      <Thumbnail
        link="think-ink"
        image="https://pro2-bar-s3-cdn-cf6.myportfolio.com/47b998b7f1c15d3de4efa5842948f544/adfd72fe-1842-42a4-aa5c-a4d21576d746_rw_1920.jpg?h=bcad6117642aaa7dc73f108b2eba89e9"
        title="THINK. Ink"
        category="Packaging"
      />
      <Thumbnail
        link="freehaven-lodge"
        image="https://pro2-bar-s3-cdn-cf5.myportfolio.com/47b998b7f1c15d3de4efa5842948f544/6d0952c2-2dfd-4121-8f27-84f1b80170f3_rw_1920.jpg?h=0b235474ac5799693551b23f2761abba"
        title="Freehaven Lodge"
        category="Identity"
      />
      <Thumbnail
        link="giterdun"
        image="https://uploads-ssl.webflow.com/5dbf381e5ad64f4cba881162/5dc25099f3d1443870faab7f_SIdexSide.jpg"
        title="Giterdun"
        category="UI/UX"
      />
      <Thumbnail
        link="hatch-show-print"
        image="https://uploads-ssl.webflow.com/5dbf381e5ad64f4cba881162/5dc1e85649118c43fdf830c3_Hatch%20Cover-p-800.jpeg"
        title="Hatch Show Print"
        category="Poster Design"
      />
    </div>
  );
}

export default Projects;
