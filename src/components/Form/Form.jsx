import React from "react";


export function InputTeam(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  
  export function InputAssignment(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="4" {...props} />
      </div>
    );
  }
  
  export function FormBtnReset(props) {
    return (
      <button {...props} onClick={props.handleSearchRestaurant} style={{ float: "center", marginBottom: 10 }} className="form-btn">
        {props.children}
      </button>
    );
  }
