import {Profile} from "../components/Profile/Profile";
import {useEffect} from "react";
import {MoreProjects} from "./../components/MiniProjects/MoreProjects";
import {AboutPage} from "./AboutPage";

export const MainPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <Profile />
      <hr />
      <MoreProjects />
      <AboutPage />
    </main>
  );
};
