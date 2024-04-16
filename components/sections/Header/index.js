import React from "react";
import Banner from "../../common/Banner";
import { Button } from "../../elements/Button";
import { Rectangle } from "../../elements/Rectangle";

export const Header = (props) => {
  const { data, dataBanner } = props;
  return (
    <div id="header">
      <div className="container">
        <div className="wrapper">
          <div className="header-detail">
            <div className="tagline">
              <div className="tagline__start">{data.tagline_start}</div>
              <div className="tagline__end">{data.tagline_end}</div>
            </div>
            <div className="description">{data.description}</div>
            <div className="overview">
              <Button type="light" name="View Intro" icon="fa fa-play play-icon" />
              <Button type="dark" name="Explore Now" />
            </div>
          </div>
          <div className="header-banner">
            <Banner dataBanner={dataBanner} />
          </div>
        </div>
      </div>

      <Rectangle />
    </div>
  );
};
