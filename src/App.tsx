import "./App.css";
import CounterComponent from "./components/Counter.component";
/**
 import TiposBasicos from "./typeScript/TiposBasicos";
 import ObjetosLiterales from " ./typeScript/ObjetosLiterales";
 import FuncionesBasicas from "./typeScript/FuncionesBasicas";
 
*/

function App() {
  return (
    <>
      {/* <h1>React + Typescript</h1> */}
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <FuncionesBasicas /> */}
      <div className="flex flex-col justify-center  items-center h-vh">
        <h1 className="text-4xl mb-5">Hello world!</h1>
        <CounterComponent />
      </div>
    </>
  );
}

export default App;
