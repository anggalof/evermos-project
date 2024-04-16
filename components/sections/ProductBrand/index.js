import React from "react";
import { Button } from "../../elements/Button";

export const ProductBrand = () => {
  return (
    <div className="product-brand">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>Proud to be part of</h5>
            <h3>Product Brands</h3>
          </div>
          <Button type="light" name="View all" icon="fa fa-angle-right" wSize="nope" />
        </div>
        
        <div className="product-brand__list">
          <img src="/images/brands/brand-1.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-2.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-3.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-4.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-5.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-6.png" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-7.webp" alt="brand" className="brand-img" />
          <img src="/images/brands/brand-8.png" alt="brand" className="brand-img" />
        </div>
      </div>
    </div>
  );
};
