import React from "react";
// import "./style.css";

// Add or Delete Team Member
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

//Add or delete teams/jobs
export function AddFormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
      {props.children}
    </button>
  );
}

export function DeleteFormBtn(props) {
  return (
    <button {...props} className="btn btn-secondary">
      {props.children}
    </button>
  )
}
// Handle submit to generate teams and reset/clear fields
export function GenerateBtn(props) {
  return (
    <button {...props} className="generate-btn">
      {props.children}
    </button>
  );
}
