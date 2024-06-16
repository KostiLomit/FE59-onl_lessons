import React from "react";
import styles from "./index.scss";

// export class Title extends React.Component {
//     render() {
//         return (
//             <section className="title">
//                 <div className="title__container" onMouseOver={this.props.switchText}>
//                 {this.props.isMouseOver ? (
//                     <h1 className="title__text title__text-isMouseOn">Sign In</h1>
//                 ) : (
//                     <h1 className="title__text title__text-isMouseOut">Sign In</h1>
//                 )}
//                 </div>
//             </section>
//         );
//     }
// }

export class Title extends React.Component {
  render() {
    const { isMouseOver, switchText } = this.props;
    return (
      <section className="title">
        <div className="title__container" onMouseOver={switchText}>
          <h1
            className={`title__text ${
              isMouseOver ? "title__text-isMouseOn" : "title__text-isMouseOut"
            }`}
          >
            Sign In
          </h1>
        </div>
      </section>
    );
  }
}
