import React from "react";
import styles from './index.scss';

export class Burger extends React.Component {
  render() {
    return (
      <section className="burger">
        <div className="burger__container" onClick={this.props.switchBurger}>
          {this.props.isOpen ? (
            <svg className="burger__img burger__img-close" width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.22217" y="2.80762" width="32" height="4" rx="2" transform="rotate(45 4.22217 2.80762)" fill="#000"/>
                <rect x="2.80762" y="25.7781" width="32" height="4" rx="2" transform="rotate(-45 2.80762 25.7781)" fill="#000"/>
            </svg>
          ) : (
            <svg className="burger__img burger__img-open" width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="5" width="30" height="4" rx="2" fill="#000" />
              <rect y="13" width="30" height="4" rx="2" fill="#000" />
              <rect y="21" width="30" height="4" rx="2" fill="#000" />
            </svg>
          )}
        </div>
      </section>
    );
  }
}
