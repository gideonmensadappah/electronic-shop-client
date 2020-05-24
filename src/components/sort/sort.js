import React from "react";

export const Sort = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <select class="custom-select">
            <option selected>Sort...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};
