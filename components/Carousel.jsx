import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

  const [state, setState] = useState(0)

  const previous = () => {
    setState(state !== 0 ? state - 1 : 2);
  }
  const next = () => {
    setState(state !== images.length - 1 ? state + 1 : 0);
  }


  return (

    <>
      <div className="box">


        <div className="container">
          <ArrowBackIosIcon className="left" fontSize="large" onClick={previous} />
          <div className="img-div">
            <img src={images[state].img} />
          </div>
          <div className="texts">
            <h1>{images[state].title}</h1>
            <h2>{images[state].subtitle}</h2>
          </div>

          <ArrowForwardIosIcon className="left" fontSize="large" onClick={next} />
        </div>



      </div>
    </>
  )
}

export default Carousel;