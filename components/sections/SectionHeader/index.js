import React from "react";
import { Button } from "../../elements/Button";
import { RectangleTwo } from "../../elements/RectangleTwo";

export const SectionHeader = () => {
  return (
    <div className="container">
      <div id="section-header">
        <div className="wrapper">
          <div className="section-header__gallery">
            <img src="/images/gallery/gallery-1.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-2.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-3.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-4.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-5.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-6.png" alt="gallery" />
            <img src="/images/gallery/gallery-7.jpeg" alt="gallery" />
            <img src="/images/gallery/gallery-8.jpeg" alt="gallery" />
          </div>
          <div className="header-detail">
            <div className="tagline">
              <div className="tagline_start">Gallery Products</div>
              <div className="tagline_end">Berkualitas & Murah</div>
            </div>
            <div className="overview">
              <Button type="dark" name="Explore Now" />
            </div>
          </div>
        </div>
        <RectangleTwo />
      </div>
    </div>
  );
};
