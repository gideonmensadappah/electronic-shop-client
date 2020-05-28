import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../../utils/httpFunctions";
import { Link } from "react-router-dom";
const styles = {
  link: {
    marginLeft: "10vh",
  },
};
export const ProductCategory = (props) => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((res) => setCategory(res.data))
      .catch((err) => alert("error"));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {categories
            ? categories.map((category) => (
                <div key={category.id} className=" mt-3 col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={category.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category.category}</h5>

                      <Link
                        to={`/shop/category/${category.category}`}
                        className="btn btn-primary"
                        style={styles.link}
                      >
                        <i className="far fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};
