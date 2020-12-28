import React from "react";
import './style.css';

export function InputTeam(props) {
  return (
    <div className="form-group">
      <input className="form-control" id="formControl" {...props} />
    </div>
  );
}

export function InputAssignment(props) {
  return (
    <div className="form-group">
      <input className="form-control" id="formControl" {...props} />
    </div>
  );
}

