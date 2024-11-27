import React, { useState } from "react";
function App() {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofitems = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>ToDolist</h1>
          <br />
          <input
            type="text"
            value={InputList}
            placeholder="Add your task"
            onChange={itemEvent}
          />
          <button onClick={listofitems}>+</button>
          <ol>
            {Items.map((val) => {
              return <li>{val}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
