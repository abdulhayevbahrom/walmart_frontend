<<<<<<< HEAD
import React from "react";

function Banner() {
  return <div></div>;
}

export default Banner;
=======
import React from 'react'
import {Link} from "react-router-dom"
import './Banner.css'
import img from "./img/images (1).png"
// import img2 from "./img/images (2).jpg"
// import img3 from "./img/images (3).jpg"
// import img4 from "./img/images (4).jpg"
// import img5 from "./img/images (5).jpg"
// import img6 from "./img/images (6).jpg"
// import img7 from "./img/images (7).jpg"
// import img8 from "./img/images (8).jpg"
// import img9 from "./img/images.jpg"

function Banner() {
  return (
    <div className="grid ">
    <div className="deals item1">
      <div className="text">
      <h2>Deals on tech from $ 188</h2>
      <Link>
      shop now
      </Link>
      <p><s>$135</s></p>
      <h1><sup>$</sup> 14 <sup>99</sup></h1>
      </div>
      <img className='img_Banner' src={img} alt="" />

    </div>
    <div className="deals item2">2</div>
    <div className="deals item3">3</div>
    <div className="deals item4">4</div>
    <div className="deals item5">5</div>
    <div className="deals item6">6</div>
    <div className="deals item7">7</div>
    <div className="deals item8">8</div>
    <div className="deals item9">9</div>
    <div className="deals item10">10</div>
  </div>
  )
}

export default Banner
>>>>>>> origin/umarxon
