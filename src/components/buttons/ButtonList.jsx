import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} onClick={props.onClick} data-id={props.id} tabIndex="0">
      {/* ✗ */}
      -
    </button>
  );
}

export function AddBtn(props) {
  return (
    <button className="add-btn" {...props} onClick={props.onClick} data-id={props.id}>
      {/* {props.children} */}
      +
    </button>
  );
}