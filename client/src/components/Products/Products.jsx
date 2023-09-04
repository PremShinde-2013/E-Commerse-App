import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
const Products = ({ products, innerPage, headingText }) => {
  // Check if products is undefined before attempting to access data
  const productData = Array.isArray(products?.data) ? products.data : [];

  return (
    <div className='products-container'>
      {!innerPage && <div className='sec-heading'>{headingText}</div>}
      <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {productData.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
