import React from "react";

//? si la función no depende de un estado, se puede declarar por fuera de la función principal
const sumarNumeros = (a: number, b: number): number => {
  return a + b;
};

const FuncionesBasicas = () => {
  return (
    <React.Fragment>
      <h1>Funciones Basicas</h1>
      <span>el resultado de sumar {sumarNumeros(2, 3)}</span>
    </React.Fragment>
  );
};

export default FuncionesBasicas;
