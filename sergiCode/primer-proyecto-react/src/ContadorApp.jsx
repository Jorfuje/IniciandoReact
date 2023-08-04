import React from "react";
import { useState } from "react";

const ContadorApp = ({ value }) => {

  const [ contador, setContador ] = useState (value);
  
  const handleClick = () => {
    setContador(contador + 1)
  };

  return (
    <>
      <h1>Contador: </h1>
      <p> {contador} </p>
      <button onClick={handleClick}>Soy un botón</button>
    </>
  );
};

export default ContadorApp;
