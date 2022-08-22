import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../api/category";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";

function LandingPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const result = await getAllCategories();
    setCategories(result.data);
  };

  return (
    <>
      <Navbar />
      <div className="home container">
        <div className="row">
          <div className="col-12">
            <h2 className="home-title">Welcome to Online Shopping...</h2>
          </div>
          <div className="col-12">
            <div className="category-list">
              <div className="category-item">
                <Link to="/products">All Products</Link>
              </div>
              <div className="category-item">
                <Link to="/products">All Products</Link>
              </div>
              <div className="category-item">
                <Link to="/products">All Products</Link>
              </div>
              <div className="category-item">
                <Link to="/products">All Products</Link>
              </div>
              <div className="category-item">
                <Link to="/products">All Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;