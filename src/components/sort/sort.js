import React from "react";

export const Sort = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <select className="custom-select">
            <option defaultValue>Sort...</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};
