import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      {toDos.map((value) => {
        return (
          <div className="todos">
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(value);
                    setToDos(
                      toDos.filter((object) => {
                        if (object.id === value.id) {
                          object.status = e.target.checked;
                        }
                        return object;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        );
      })}
      {toDos.map((value) => {
        if (value.status) {
          return <h1>{value.text}</h1>;
        }
        return null;
      })}
    </div>
  );
}

export default App;
