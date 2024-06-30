import { useState } from "react";

function Ccounter() {
    const [count, setCount] = useState(0);
    const [countScnd, setCountScnd] = useState(0);

    return (
        <div>
            <p>Счетчик 1:{count}</p>
            <p>Счетчик 2:{countScnd}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить счетчик 1</button>
            <button onClick={() => setCountScnd(countScnd + 1)}>Увеличить счетчик 2</button>
        </div>
    )
}

export default Ccounter;