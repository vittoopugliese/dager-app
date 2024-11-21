import {Profile} from "../components/Profile/Profile";
import {useEffect} from "react";
import {MoreProjects} from "./../components/MiniProjects/MoreProjects";
import FinalSection from "../components/FinalSection";
import {useNavigate} from "react-router-dom";
import {Button} from "../components/Shared/Button";

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <Profile />
      <hr />
      <FinalSection />
      <MoreProjects />

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4em",
        marginBottom: "10em"
      }}>
        <Button
          text="Sobre mi..."
          path="/dager"
          iconClass="fa-solid fa-arrow-right"
        />
      </div>
    </main>
  );
};
