import { useState } from "react";

export const Counter = ({ initialValue, step }) => {
  const [currValue, setCurrValue] = useState(initialValue);

  const resultMas = () => {
    setCurrValue(currValue + step);
  };

  const resultMenos = () => {
    setCurrValue(currValue - step);
  };

  return (
    <div className="counter">
      <div className="counter__container">
        <p>Cчетчик: {currValue} </p>
        <div className="counter__buttons">
          <button onClick={resultMas}>увеличить</button>
          <button onClick={resultMenos}>уменьшить</button>
        </div>
      </div>
    </div>
  );
};
