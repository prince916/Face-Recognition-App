import "./App.css";
import Particles from "react-particles";
import Logo from "./componenets/Logo/Logo";
import Navigation from "./componenets/Navigation/Navigation";
import ImageLinkForm from "./componenets/ImageLinkForm/ImageLinkForm";
import Rank from "./componenets/Rank/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <div className="flex justify-between">
        <Logo />
        <Navigation />
      </div>
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
