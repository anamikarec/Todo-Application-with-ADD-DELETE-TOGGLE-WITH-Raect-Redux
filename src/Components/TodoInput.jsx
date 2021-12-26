import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const action = addTodo(payload);
    dispatch(action);
  };
  return (
    <div>
      <h3>Add Todos</h3>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="..add Something"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default TodoInput;
