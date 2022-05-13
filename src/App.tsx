import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Tarea..." />
          <input type="number" placeholder="Tiempo limite (Días) ..." />
        </div>
        <button>Añadir tarea</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
