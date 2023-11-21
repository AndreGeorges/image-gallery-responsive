import './App.css';
import WSPGallery from './components/WSPGallery';

const galleryImages = [
  { 

  }
]


function App() {
  return (
    <div className="App">
      <strong>Responsive Photo Gallery in React JS</strong>
  
    <WSPGallery
      galleryImages={galleryImages}
    />

    </div>
  );
}

export default App;
