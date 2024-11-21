import React from "react";
import {LoadingSpinner} from "./LoadingSpinner";
import "./shared.css";
export const OnPageLoad = () => {
  return (
    <>
      <div className="page-load-content">
        <h1>Cargando...</h1>
        <div className="loadem">
          <LoadingSpinner size="5" />
        </div>
      </div>
    </>
  );
};
