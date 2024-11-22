import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {useMedia} from "./../../hooks/useMedia";
import {useNavigate, useLocation} from "react-router-dom";
import "./header.css";
import {useGlobalContext} from "../../contexts/GlobalContextProvider";

export const Header = () => {
  const {isMobile} = useMedia(620);

  const navigate = useNavigate();
  const location = useLocation();

  const {modoBananero, setModoBananero} = useGlobalContext();

  const toggleModoBananero = () => {
    setModoBananero(!modoBananero);
  };

  return (
    <>
      {location.pathname == "/" && !modoBananero &&  <div className="background-image"></div>}
      {location.pathname == "/" && modoBananero &&  <div className="background-image background-image-2"></div>}
      <header style={{height: !isMobile ? "74px" : "90px"}}>
        {isMobile ? <NavLarge /> : <NavSmall />}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexDirection: "row",
          }}>
          {modoBananero && (
            <img
              src="./bananero.png"
              onClick={toggleModoBananero}
              alt="lumber"
              draggable={false}
              className="nav-small-image"
            />
          )}

          <img
            src="./lumber.png"
            onClick={() => navigate("/lumberjvck")}
            alt="lumber"
            draggable={false}
            className="nav-small-image"
          />
        </div>
      </header>
    </>
  );
};
