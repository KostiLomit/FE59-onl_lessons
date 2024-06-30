import { useState } from "react";

function Toggle() {
    
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        setIsOn(prevIsOn => !prevIsOn);
    };

    return (
        <div>
            <p>Состояние:{isOn ? ' включено' : ' выключено'}</p>
            <button onClick={toggleState}>Переключить</button>
        </div>

    );
}
export default Toggle;