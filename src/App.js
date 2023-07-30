import "./App.css";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
import Logo from "./componenets/Logo/Logo";
import Navigation from "./componenets/Navigation/Navigation";
import ImageLinkForm from "./componenets/ImageLinkForm/ImageLinkForm";
import Rank from "./componenets/Rank/Rank";
import { Component } from "react";
import FaceRecognition from "./componenets/FaceRecognition/FaceRecognition";
import Signin from "./componenets/signin/Signin";
import Register from "./componenets/register/Register";

// const app = new Clarifai.App({
//   apiKey: "ec5020228af342e58bc23eef1da62b21",
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      route: "signin",
      isSignedIn: false
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    App.models
      .predict(
        Clarifai.COLOR_MODEL,
        "https://dqt8gd4elnkw6.cloudfront.net/image/Face-makeup-tips-for-flawless-looking-skin%20%281%29.png"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          //text
        }
      );
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { imageUrl, route } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="fountain" bg={true} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition imageUrl={imageUrl} />
            </div>
          : (
             this.state.route === 'signin'
             ? <Signin onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
