import React, { useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const handleToggle = (id) => {
    // return todos.map((item) =>
    //   return item.id === id ? [...item, !item.status] : item;
    // );
  };
  return (
    <div>
      {todos.map((item) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                border: "1px solid black",
                margin: "5px",
                borderRadius: "5px",
                justifyContent: "center"
              }}
            >
              <h3>{item.title}</h3>
              {/* <h3>{item.id}</h3> */}
              <h3>{item.status ? "Done" : "Pending"}</h3>
              {/* <button onClick={handleToggle(item.id)}>Toggle</button> */}
            </div>
          </>
        );
      })}
    </div>
  );
};
export default TodoList;
