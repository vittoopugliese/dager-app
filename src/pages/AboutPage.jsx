import {useEffect, useState} from "react";
import "../components/About/about.css";
import {SectionTitle} from "../components/Shared/SectionTitle";
import Socials from "../components/About/Socials";
import {useNavigate} from "react-router-dom";
import { interests } from "../utils/constants";
import InterestBox from "../components/InterestBox";

function openLink() {
  window.open("https://www.youtube.com/@DotDager");
}

export const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const navigate = useNavigate();

  const game = () => {
    navigate("/lumberjvck");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev === 1 ? 2 : 1));
    }, 254);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="about-section-container">
      <SectionTitle iconClass="fa-solid fa-layer-group" title="Sobre Mi" />
      <p>
        <b className="b">Mariano</b> es un desarrollador de software con más de
        8 años de experiencia en el desarrollo de aplicaciones usando diversas
        tecnologias. Actualmente trabajando en su propio canal de
        <b style={{color: "#f84646", cursor: "pointer"}} onClick={openLink}>
          {" "}
          YouTube{" "}
        </b>
        y paralelamente haciendo freelancing.
      </p>

      <div className="dagers-container">
        <img
          src={currentImage === 1 ? "./pan1.jpg" : "./pan2.jpg"}
          width="300px"
          style={{
            opacity: 1,
            transition: "opacity 200ms ease-in-out",
          }}
        />
      </div>

      <SectionTitle iconClass="fa-solid fa-layer-group" title="Mis Intereses" />

      <div className="more-projects-container">
          {interests.map((interest) => {
            return <InterestBox interest={interest} key={interest.name} />;
          })}
        </div>

      <p style={{marginTop: 44}}>
        Además de programar en C#, es un gran amante
        del heterofalocentrismo y practicante del mismo. También es un gran
        jugador del clásico juego <b className="b">Lumberjack </b>, el cual está
        disponible haciendo{" "}
        <span
          onClick={game}
          style={{
            fontStyle: "italic",
            textDecoration: "underline",
            cursor: "pointer",
          }}>
          clic aquí
        </span>{" "}
        o en el icono del juego en la barra de navegación. Para más información
        sobre el catador fálico, puedes visitar su canal y sus demás redes
        sociales.
      </p>

      <div style={{height: "50px"}}></div>
      <Socials />
      <div style={{height: "500px"}}></div>
    </section>
  );
};
