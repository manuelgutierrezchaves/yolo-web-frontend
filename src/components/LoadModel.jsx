import React from "react"
import "../styles/LoadModel.css"
import axios from "axios";
import { useState } from "react";


function LoadModel () {

  const [selectedModel, setSelectedModel] = useState("")

  const handleClick = (modelName) => {
    axios.post(`http://0.0.0.0:8000/load_model/${modelName}.pt`)
      .then(response => {
        console.log(response);
        setSelectedModel(modelName)
      })
      .catch(error => {
        console.error(error);
      });
  };

  return(
    <div className="load-model-buttons">
      <button
        onClick={() => handleClick("yolov8n")}
        className={selectedModel == "yolov8n" ? "selected-button" : ""}>
          YOLOv8n
      </button>
      <button
        onClick={() => handleClick("yolov8s")}
        className={selectedModel == "yolov8s" ? "selected-button" : ""}>
          YOLOv8s
      </button>
      <button
        onClick={() => handleClick("yolov8m")}
        className={selectedModel == "yolov8m" ? "selected-button" : ""}>
          YOLOv8m
      </button>
      <button
        onClick={() => handleClick("yolov8l")}
        className={selectedModel == "yolov8l" ? "selected-button" : ""}>
          YOLOv8l
      </button>
      <button
        onClick={() => handleClick("yolov8x")}
        className={selectedModel == "yolov8x" ? "selected-button" : ""}>
          YOLOv8x
      </button>
    </div>
  )
}

export default LoadModel