import React, {useState} from "react";
import {SectionTitle} from "../Shared/SectionTitle";

export const Certificates = () => {
  const [more, setMore] = useState(false);

  return (
    <>
      <SectionTitle iconClass={"fa-solid fa-certificate"} title="Certificates" />
      <p style={{margin: "0.2em 0em 1em 0em"}}> These are some of my certifications... </p>
      <div className="certificates-container">
        <img src="./certificates\1.webp" alt="freeCodeCamp Certificate" />
        <img src="./certificates\3.webp" alt="freeCodeCamp Certificate" />
        {more && (
          <>
            <img src="./certificates\2.webp" alt="freeCodeCamp Certificate" />
            <img src="./certificates\4.webp" alt="freeCodeCamp Certificate" />
            <img src="./certificates\5.webp" alt="freeCodeCamp Certificate" />
          </>
        )}

      </div>
        <p style={{cursor: "pointer", textAlign:'center', marginTop:'1em'}} onClick={() => setMore((prev) => !prev)}>
          {more ? "Show less..." : "Show more..."}
        </p>
    </>
  );
};
