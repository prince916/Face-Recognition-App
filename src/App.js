import './App.css';
import Logo from './componenets/Logo/Logo';
import Navigation from './componenets/Navigation/Navigation';
import ImageLinkForm from './componenets/ImageLinkForm/ImageLinkForm';
import Rank from './componenets/Rank/Rank';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
