import React from "react";

const TiposBasicos = () => {
  const nombre: string = "Oliver";
  const edad: number = 23;
  const Activo: boolean = true;

  const powers: string[] = ["Super fuerza", "Volar", "Super velocidad"];

  return (
    <React.Fragment>
      <h1>Tipos Básicos</h1>
      <h2>{nombre}</h2>
      <h3>{edad}</h3>
      <h4>{Activo ? "Activo" : "Inactivo"}</h4>
      <h5>{powers.join(", ")}</h5>
    </React.Fragment>
  );
};

export default TiposBasicos;
