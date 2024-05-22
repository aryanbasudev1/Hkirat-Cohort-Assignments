import React from "react";

function SingleTodo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{ props.description}</h4>
      </div>
  );
}

export default SingleTodo;
