import { useState } from "react";

export const LightSwitch = ({isLightOn}) => {

    const [lightOn, setLightOn] = useState(isLightOn);

    const changeLight = () => {

        setLightOn(prevState => !prevState)
    };
    
    

    return(
        <div>
            {lightOn ? <p>включенно</p> : <p>выключенно</p>}
            <button onClick={changeLight}>{lightOn ? 'выключатель' : 'включатель'}</button>
        </div>
    );
};