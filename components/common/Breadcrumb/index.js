import React from 'react';

const Breadcrumb = (props) => {
  const { titleGeneral } = props;
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__wrapper">
          <ol className="breadcrumb__list">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li className="active">{titleGeneral.replace(/-/g, ' ')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
