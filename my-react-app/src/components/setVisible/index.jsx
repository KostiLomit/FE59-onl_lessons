import { useState } from "react";

function SetVisible() {

    const [isVisible, setIsVisible] = useState(true);

    const changeVisible = () => {
        setIsVisible(isVisible => !isVisible)
    };
    
    return (
        <div>
        <p>На стене написанно{isVisible ? ' ХУЙ' : ''}</p>
        <button onClick={changeVisible}>{isVisible ? 'стереть' : 'показать'}</button>
        </div>  
    );
};

export default SetVisible;