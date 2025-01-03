import React, { useState } from "react";

const CounterComponent = () => {
  const [contador, setContador] = useState<number>(0);

  const handleOperation = (num: number): void => {
    setContador(contador + num);
    if (contador === 0 && num === -1) {
      setContador(0);
    }
  };

  const handleReset = (): void => {
    setContador(0);
  };

  return (
    <React.Fragment>
      <h3>
        Contador: <small>{contador}</small>
      </h3>
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleOperation(+1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white"
        >
          +1
        </button>
        <button
          onClick={() => handleReset()}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white"
        >
          0
        </button>
        <button
          onClick={() => handleOperation(-1)}
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white"
        >
          -1
        </button>
      </div>
    </React.Fragment>
  );
};

export default CounterComponent;
