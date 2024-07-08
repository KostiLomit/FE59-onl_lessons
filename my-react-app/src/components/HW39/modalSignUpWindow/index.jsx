import React from "react";
import './index.scss';

export const ModalSignUp = ({ closeModal, handleSuccess, isRegSuccess }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSuccess();
  };

  return (
    <div className="signUpModal">
      <div className="signUpModal__container">
        <div className="signUpModal__header">
          <h3 className="header__title">Sign Up</h3>
          <a href="#close" title="Close" className="close" onClick={closeModal}>
            ×
          </a>
        </div>
        <div className="signUpModal__body">
          {isRegSuccess ? (
            <div className="success-message">Success!</div>
          ) : (
            <form className="signUpModal__form" onSubmit={handleSubmit}>
              <div className="form__container">
                <label htmlFor="name">Enter your name:</label>
                <input type="text" name="name" className="form__input" required />

                <label htmlFor="email">Enter your email:</label>
                <input type="email" name="email" className="form__input" required />

                <label htmlFor="password">Enter your password:</label>
                <input type="password" name="password" className="form__input" required />

                <label htmlFor="confirm_password">Confirm your password:</label>
                <input type="password" name="confirm_password" className="form__input" required />

                <button className="form__btn button-submit" type="submit">Sign Up</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
