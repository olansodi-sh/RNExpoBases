import React from "react";

//* Creación de la interfaz
interface TypePerson {
  name: string;
  age: number;
  direction: TypeDirection;
}

interface TypeDirection {
  city: string;
  country?: string; //? significa que es opcional
}

const ObjetosLiterales = () => {
  const persona: TypePerson = {
    name: "Oliver",
    age: 23,
    direction: {
      city: "Bogota",
      country: "Colombia",
    },
  };
  return (
    <React.Fragment>
      <h1>Objetos Literales</h1>
      <pre>{JSON.stringify(persona, null, 2)}</pre>
    </React.Fragment>
  );
};

export default ObjetosLiterales;
