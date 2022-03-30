import React from "react";
import Gallery from "../Mentor/components/Gallery";
import image1 from "../../components/assets/images/ima1.jpg";
import image2 from "../../components/assets/images/ima2.jpg";
import image3 from "../../components/assets/images/ima3.jpg";
import image4 from "../../components/assets/images/ima4.jpg";
import "./home.css";

const home = () => {
  const imagesBanner = [
    { id: 1, imagen: image1, url: "#" },
    { id: 2, imagen: image2, url: "#" },
    { id: 3, imagen: image3, url: "#" },
    { id: 4, imagen: image4, url: "#" },
  ];
  return (
    <div className="home">
      <div>
        <Gallery images={imagesBanner} />
      </div>

      <h2 className="barnav">Bienvenido/a a Okhlos</h2>
      <p className="text-home">
        Para conseguir tus objetivos profesionales y personales en el mundo
        tech.
      </p>
      <p className="text-home">
        Aquí podrás tener control de las mentorías y tener acceso a informes
        detallados de mentores y estudiantes.
      </p>

      <div className="session-card">
        <div className="container">

          <div className="card">
            <a href="#n" className="next">
              Ver Estudiantes
            </a>
          </div>

          <div className="card nueva">
            <a href="#n" className="next">
              Ver Metores
            </a>
          </div>

          <div className="card">
            <a href="#n" className="next">
              Ver Estudiantes
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default home;
