import React from "react";

export const Button = (props) => {
  const { name, type, icon, wSize , wMobile} = props;
  return (
    <div className={`btn-overview ${(wSize && 'owSize') || (wMobile && 'owMobile')}`}>
      <button className={`${type === 'light' ? 'btn-light' : 'btn-dark'}`}>
        {name} {icon && (<span><i className={icon}></i></span>)}
      </button>
    </div>
  );
};
