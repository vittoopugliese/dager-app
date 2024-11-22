import {useEffect, useState} from "react";
import "../components/About/about.css";
import {SectionTitle} from "../components/Shared/SectionTitle";
import Socials from "../components/About/Socials";
import {useNavigate} from "react-router-dom";
import { interests } from "../utils/constants";
import InterestBox from "../components/InterestBox";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

function openLink() {
  window.open("https://www.youtube.com/@DotDager");
}

export const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const {setModoBananero} = useGlobalContext();
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
    }, 454);

    return () => clearInterval(intervalId);
  }, []);

  const handleBananeroMode = () => {
    setModoBananero(true);
    navigate("/");
  };

  return (
    <section className="about-section-container">
      <SectionTitle iconClass="fa-solid fa-layer-group" title="Sobre Mi" />
      <p>
        <b className="b">Mariano</b> es un desarrollador de software con
        <b className="b"> más de 8 años de experiencia </b> en el desarrollo de aplicaciones usando diversas
        tecnologias. Actualmente trabajando en su propio canal de
        <b style={{color: "#f84646", cursor: "pointer"}} onClick={openLink}>
          {" "}
          YouTube{" "}
        </b>
        y paralelamente haciendo freelancing, se caracteriza por su <b className="b">seriedad</b> al afrontar nuevos proyectos y desafios.
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

      <p style={{marginTop: 30}}></p>

      <SectionTitle iconClass="fa-solid fa-layer-group" title="Mis Intereses" />

      <div className="more-projects-container">
          {interests.map((interest) => {
            return <InterestBox interest={interest} key={interest.name} />;
          })}
        </div>

      <p style={{marginTop: 84}}>
        Además de programar en C# como actividad principal, es un gran amante y practicante
        del <b className="b">  heterofalocentrismo</b>. También es un gran
        jugador del clásico juego <b className="b">Lumberjack</b>, el cual está
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
        o en el icono del juego en la barra de navegación. <br /> Para más información
        sobre el catador fálico, puedes visitar su canal y demás redes
        sociales.
      </p>

      <div style={{height: "90px"}}></div>

      <Socials />

      <div style={{height: "300px"}}></div>

      <p style={{textAlign: "center"}}>🥒 Hecho con amor por 
        <a href="https://www.linkedin.com/in/vittoopugliese/" target="_blank">
          <b style={{color: "white"}}> Vittorio </b>
        </a> 
        💘 !
      </p>

      <p style={{textAlign: "center", marginTop: 20}}>Ya que leiste hasta aca, activate el 
        <a style={{cursor: "pointer"}} onClick={handleBananeroMode} target="_blank">
          <b style={{color: "white"}}> MODO BANANERO </b>
        </a> 
        🍌
        <br />
        (se desactiva en el header)
      </p>

      <div style={{height: "100px"}}></div>
    </section>
  );
};
