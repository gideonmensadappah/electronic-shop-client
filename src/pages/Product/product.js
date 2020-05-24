import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

const Product = (prop) => {
  const { items, history } = prop;
  const handleCardClick = useCallback(() => {
    history.push("/shop/products");
  }, [history]);
  return (
    <>
      <div className="container">
        <div className="row">
          {items
            ? items.map((item) => (
                <div key={item.barcode} className="col-4">
                  <div className="card">
                    <div className="card-header">
                      <span onClick={handleCardClick}>{item.category}</span>
                    </div>
                    <div className="card-body"></div>
                    <div className="card-footer"></div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};
export default withRouter(Product);
