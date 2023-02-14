import './App.css';
import LoadModel from './components/LoadModel';
import UploadImage from './components/UploadImage';
import { useEffect, useState } from 'react';

function App() {

  const [newImage, setNewImage] = useState(0)
  const [imageSrc, setImageSrc] = useState("")

  useEffect(() => {
    if (newImage === 0) {
      return;
    }
    setImageSrc(`http://localhost:8000/image?t=${Date.now()}`)
  }, [newImage]);

  return (
    <div className="App">
      <div className="titulo-pagina">
        YOLOv8 Pretrained Models Showcase
      </div>
      <div className="load-and-upload">
        <LoadModel />
        <UploadImage setNewImage={setNewImage} number={newImage}/>
      </div>
      <div className="instructions-and-image">
        <div className="instruction-container">
          <h1>Instructions</h1>
          <h3>1. Select model from list</h3>
          <h3>2. Upload image</h3>
          <h3>3. Upload more images in order to keep detecting</h3>
        </div>
        <div className="image-container">
          <img src={imageSrc} className="infered-image" alt="Follow the instruccions to detect objects in an image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
