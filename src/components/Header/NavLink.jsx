import React from "react";
import {useNavigate} from "react-router-dom";

export const NavLink = ({text, path, iconClass, setNavOpen}) => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <div
      onClick={() => {
        navigate(path)
        if(setNavOpen) setNavOpen(false)
      }}
      className={location == path ? 'nav-item nav-item-br' : 'nav-item'}
      style={{fontWeight: '600'}}
      >
      <i className={iconClass}></i>
      <p>{text}</p>
    </div>
  );
};
