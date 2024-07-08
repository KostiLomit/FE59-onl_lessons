import React, { useState } from "react";
import { SignUpBtn } from "./signUpBTN";
import { ModalSignUp } from "./modalSignUpWindow";

export const HW39 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegSuccess, setIsRegSuccess] = useState(false)

  const openModal = () => {
    setIsModalOpen(prevState => !prevState);
    setIsRegSuccess(false);
  };

  const handleSuccess = () => {
    setIsRegSuccess(true);
    console.log("Ok");
  };

  return (
    <>
      <SignUpBtn openModal={openModal} />
      {isModalOpen && <ModalSignUp closeModal={openModal} handleSuccess={handleSuccess} isRegSuccess = {isRegSuccess} />}
    </>
  );
};
