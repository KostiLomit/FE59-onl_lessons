import React, { useEffect } from "react";
import FetchData from "../fetchData"
import Counter  from "../counter";
import Toggle from "../toggle";
import Ccounter from "../ccounter";
import SetVisible from "../setVisible";
import PostCard from "../postCard";



// import { Burger } from "../burger";
// import { Title, title } from "../title"author
//     this.state = {
//       isOpen: false,
//       isMouseOver: false,
//       alertStatus: 'alert'
//     };
//   }

//   switchBurger = () => {
//     this.setState((prevState) => ({
//       isOpen: !prevState.isOpen
//     }));
//   };

//   switchText = () => {
//     this.setState((prevState) => ({
//       isMouseOver: !prevState.isMouseOver
//     }));
//   };

//   changeAlertStatus = (status) => {
//     this.setState({ alertStatus: status });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Burger isOpen={this.state.isOpen} switchBurger={this.switchBurger} />
//         <Title isMouseOver={this.state.isMouseOver} switchText={this.switchText}/>
//         <Alert status={this.state.alertStatus}/>
//         <Posts />
//       </React.Fragment>
//     );
//   }
// }

// export default App;



export const App = () => {


  return ( 
    <React.Fragment>
          <FetchData /> 
          <Counter />
          <Toggle />
          <Ccounter />
          <SetVisible />
          {/* <PostCard /> */}
    </React.Fragment>
  )
};

export default App;