import {NavLarge} from "./NavLarge";
import {NavSmall} from "./NavSmall";
import {useMedia} from "./../../hooks/useMedia";
import {useNavigate, useLocation} from "react-router-dom";
import "./header.css";

export const Header = () => {
  const {isMobile} = useMedia(620);

  const navigate = useNavigate();

  return (
    <header style={{height: !isMobile ? "74px" : "90px"}}>
      {isMobile ? <NavLarge /> : <NavSmall />}

      <img
        src="../lumber.png"
        onClick={() => navigate("/lumberjvck")}
        alt="my personal image"
        draggable={false}
        className="nav-small-image"
      />
    </header>
  );
};
