import React from "react";
import { Burger } from "../burger";
import { Title, title } from "../title";
import { Alert } from "../alerts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isMouseOver: false,
      alertStatus: 'alert'
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

  changeAlertStatus = (status) => {
    this.setState({ alertStatus: status });
  };

  render() {
    return (
      <React.Fragment>
        <Burger isOpen={this.state.isOpen} switchBurger={this.switchBurger} />
        <Title isMouseOver={this.state.isMouseOver} switchText={this.switchText}/>
        <Alert status={this.state.alertStatus('block')}/>

      </React.Fragment>
    );
  }
}

export default App;