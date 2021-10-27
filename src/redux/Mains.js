import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./action/Index";

function Mains() {
  const [input, setInput] = useState("");
  const data = useSelector((state) => state.reducer);
  console.log("data", data);
  const dispatch = useDispatch();
  console.log("input", input);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpdate = (data, id) => {
    const updated = prompt("enter", data);
    dispatch(updateTask(id, updated));
  };

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button
          onClick={() => {
            dispatch(addTask(input));
            setInput("");
          }}
        >
          ADD
        </button>
      </div>
      {data.map((item, index) => {
        return (
          <div>
            <div>{item}</div>
            <div>{index}</div>
            <button onClick={() => dispatch(deleteTask(item, index))}>
              DEL
            </button>
            <button onClick={() => handleUpdate(item, index)}>UPDATE </button>
          </div>
        );
      })}
    </>
  );
}

export default Mains;
