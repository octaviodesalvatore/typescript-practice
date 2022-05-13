import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tarea..."
            onChange={handleChange}
            name="task"
          />
          <input
            type="number"
            placeholder="Tiempo limite (Días) ..."
            onChange={handleChange}
            name="deadline"
          />
        </div>
        <button onClick={addTask}>Añadir tarea</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
