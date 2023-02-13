import React from "react"
import "../styles/LoadModel.css"
import axios from "axios";


function LoadModel () {

  const handleClick = (modelName) => {
    axios.post(`http://0.0.0.0:8000/load_model/${modelName}.pt`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return(
    <div className="load-model-buttons">
      <button onClick={() => handleClick("yolov8n")}>YOLOv8n</button>
      <button onClick={() => handleClick("yolov8s")}>YOLOv8s</button>
      <button onClick={() => handleClick("yolov8m")}>YOLOv8m</button>
      <button onClick={() => handleClick("yolov8l")}>YOLOv8l</button>
      <button onClick={() => handleClick("yolov8x")}>YOLOv8x</button>
    </div>
  )
}

export default LoadModel