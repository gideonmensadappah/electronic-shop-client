import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../../utils/httpFunctions";
import { Link } from "react-router-dom";
import imgCategory from "../../../logo512.png";
const styles = {
  link: {
    marginLeft: "10vh",
  },
  cardTitle: {
    textAlign: "center",
    fontSize: "2em",
  },
  cardRow: {
    marginBottom: "30px",
  },
};
export const ProductCategory = (props) => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => alert("error"));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Shop By Category</h1>
        <div className="row" style={styles.cardRow}>
          {categories
            ? categories.map((category) => (
                <div key={category.id} className=" mt-5 col-6">
                  <div className="card" style={{ width: "18rem" }}>
                    <h5 style={styles.cardTitle}>{category.category}</h5>
                    <img src={imgCategory} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <Link
                        to={`/shop/category/${category.category}`}
                        className="btn btn-primary"
                        style={styles.link}
                      >
                        View
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
