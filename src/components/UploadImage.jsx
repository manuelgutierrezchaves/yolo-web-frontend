import axios from 'axios';
import { useState, useEffect } from 'react';
import "../styles/UploadImage.css"


function UploadImage ( {setNewImage, number} ) {

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = event => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!imageFile) {
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    axios.post("http://localhost:8000/predict", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    })
    .then(() => {
      setNewImage(number + 1);
    });
  }, [imageFile]);


  return(
    <div className="upload-image">
      <input type="file" onChange={handleFileChange} />
    </div>
  )

}

export default UploadImage