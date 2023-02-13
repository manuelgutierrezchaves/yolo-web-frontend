import './App.css';
import LoadModel from './components/LoadModel';

function App() {
  return (
    <div className="App">
      <LoadModel />
      <div className="uploadImage">
        UPLOAD
      </div>
      <div className="inferedImage">
        IMAGE
      </div>
    </div>
  );
}

export default App;
