import { useState } from "react";

 function Counter() {
    // Инициализация состояния с начальным значением 0
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Счетчик: {count}</p>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
      </div>
    );
  }
  export default Counter;