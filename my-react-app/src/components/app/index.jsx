import React from "react";
import { Burger } from "../burger";
import { Title, title } from "../title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isMouseOver: false
    };
  }

  switchBurger = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  switchText = () => {
    this.setState((prevState) => ({
      isMouseOver: !prevState.isMouseOver
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Burger isOpen={this.state.isOpen} switchBurger={this.switchBurger} />
        <Title isMouseOver={this.state.isMouseOver} switchText={this.switchText}/>
      </React.Fragment>
    );
  }
}

export default App;