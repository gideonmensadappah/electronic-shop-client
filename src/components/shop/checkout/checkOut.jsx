import React, { useCallback } from "react";

export const ShopCheckOut = () => {
  const userClickBuy = useCallback(() => {
    alert("buy");
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" />
          </div>
          <button className="btn btn-primary" onClick={userClickBuy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
