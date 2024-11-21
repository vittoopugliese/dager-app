import {useNavigate} from "react-router-dom";
import "./shared.css";

export const Button = ({text, path, iconClass}) => {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate(path)}>
      <span>{text}</span>
      <i className={iconClass} style={{marginLeft: "0.4em"}}></i>
      <div className="border full-rounded"></div>
    </button>
  );
};
