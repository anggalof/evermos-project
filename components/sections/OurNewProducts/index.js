import React from "react";
import Link from "next/link";
import { priceSplitter } from '../../../utils/formatter/currency';
import { Button } from "../../elements/Button";
import LoaderProducts from "../../common/LoaderProducts";

export const OurNewProducts = (props) => {
  const { data, loading } = props;
  const countLoading = [1, 2, 3, 4];
  return (
    <div className="ouritems">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>Whats new?</h5>
            <h3>Take a look at some of our products</h3>
          </div>
          <Button type="light" name="View More" icon="fa fa-angle-right" wSize="nope" />
        </div>
        
        <div className="items">
          <div className="items-wrap items-grid">
          {loading ? (
            countLoading.map((index) => (
              <div className="load-box" key={index}>
                <LoaderProducts />
              </div>
            ))
          ) : (
            data && data.length > 0 ? (
              data.map((item) => {
                const urlTitle = item.name.split(/\W+/).filter((val) => val).join('-');
                return (
                  <Link key={item.id} href={`/product/detail/${item.id}/${urlTitle.toLowerCase()}`}>
                    <div className="items-box">
                      <img src={item.image_url} alt={item.name} className="items-box__img" />
                      <div className="product__title">
                        {item.code} - {item.name}
                      </div>
                      <div className="product__info">
                        <div className="product__info-wrap">
                          <span>Product:</span>
                          <span className="fill-info">{item.product_type}</span>
                        </div>
                        {item.size && (
                          <>
                            <div className="poin">
                              <span>&#x2022;</span>
                            </div>
                            <div className="product__info-wrap">
                              <span>Size:</span>
                              <span className="fill-info">{item.size}</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="product__price">
                        Rp. {priceSplitter(item.price)}
                      </div>
                      <div className="product__location">
                        <img src="/images/icons/location.png" alt="location" className="product__location-img" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="not-found">
                Data not found, please try again with key that right
              </div>
            )
          )}
          </div>
        </div>

        <Button type="light" name="View More" icon="fa fa-angle-right" wMobile="active" />
      </div>
    </div>
  );
};
