import React from "react";
// import { useEffect, useState } from "react";
import './index.scss';

export const SignUpBtn = ({ openModal }) => {
    return (
        <div className="signUp">
            <button className="signUpBtn" onClick={openModal}>Sign Up</button>
        </div>
        
    )
}