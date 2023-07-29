import "./App.css";
import Particles from "react-tsparticles";
import Logo from "./componenets/Logo/Logo";
import Navigation from "./componenets/Navigation/Navigation";
import ImageLinkForm from "./componenets/ImageLinkForm/ImageLinkForm";
import Rank from "./componenets/Rank/Rank";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import FaceRecognition from "./componenets/FaceRecognition/FaceRecognition";
import Signin from "./componenets/signin/Signin";


function App() {
  

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);


  const onInputChange = () => {

  }

  const onButtonSubmit = () => {
    console.log('click');
  }

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0A0367",
            },
            links: {
              color: "#0A0367",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex justify-between">
        <Logo />
        <Navigation />        
      </div>
      <Signin />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition />
    </div>
  );
}

export default App;
