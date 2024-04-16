import React from "react";
import { Button } from "../../elements/Button";

export const OurNews = (props) => {
  const { data } = props;
  return (
    <div className="ouritems">
      <div className="container">
        <div className="our-item_wrapper">
          <div className="our-item_title">
            <h5>You already now?</h5>
            <h3>Useful product knowledge</h3>
          </div>
          <Button type="light" name="View More" icon="fa fa-angle-right" wSize="nope" />
        </div>
        
        <div className="items">
          {data && data.length > 0 ? (
            <div className="items-wrap items-news-grid">
              {data && data.map((item) => {
                return (
                  <div key={item.id} className="items-box">
                    <img src={item.image_url} alt={item.name} className="items-box__img" />
                    <div className="items-type">
                      {item.info}
                    </div>
                    <div className="product__headline">
                      {item.name}
                    </div>
                    <div className="product__description">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="not-found">
              Data not found, please try again with key that right
            </div>
          )}
        </div>

        <Button type="light" name="View More" icon="fa fa-angle-right" wMobile="active" />
      </div>
    </div>
  );
};
