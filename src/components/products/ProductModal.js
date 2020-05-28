import React from "react";
import img1 from "../../components/assets/img1.png";
const styles = {
  image: {
    height: "40vh",
  },
};
export const ProductModal = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img style={styles.image} src={img1} alt="" srcset="" />
          </div>
          <div className=" col-6 info">
            <div className="title">Product Name</div>
            <div className="product-price">Price</div>
            <div className="product-description">Description</div>
            <div className="footer">
              <div className="button-futures mt-3">
                <button className="btn btn-primary">Add To Cart</button>
                <button className="btn btn-primary ml-3">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
