import React from "react";
// import "./style.css";

// Add or Delete members to list to be assigned
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

export function ResetFieldBtn(props) {
  return (
    <button {...props} className="reset-btn">
      {props.children}
    </button>
  );
}

//Edit assignment title button
export function EditFieldBtn(props) {
  return (
    <button {...props} className="edit-btn">
      {props.children}
    </button>
  );
}

//Add or subtract members assigned to one job
export function AddPartner(props) {
  return (
    <button {...props} className="add-partner">
      {props.children}
    </button>
  );
}

export function DeletePartner(props) {
  return (
    <button {...props} className="delete-partner">
      {props.children}
    </button>
  );
}