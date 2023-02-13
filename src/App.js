import './App.css';
import LoadModel from './components/LoadModel';
import UploadImage from './components/UploadImage';
import { useEffect, useState } from 'react';

function App() {

  const [newImage, setNewImage] = useState(0)
  const [imageSrc, setImageSrc] = useState("")

  useEffect(() => {
    if (newImage == 0) {
      return;
    }
    setImageSrc(`http://localhost:8000/image?t=${Date.now()}`)
  }, [newImage]);

  return (
    <div className="App">
      <LoadModel />
      <UploadImage setNewImage={setNewImage} number={newImage}/>
      <div className="image-container">
        <img src={imageSrc} className="infered-image"/>
      </div>
    </div>
  );
}

export default App;
