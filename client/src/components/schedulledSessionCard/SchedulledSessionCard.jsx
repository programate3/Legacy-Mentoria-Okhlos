import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../schedulledSessionCard/schedulledSessionCard.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const SchedulledSessionCard = ({ numSession, startDate, endDate, id }) => {
  const [sessionFilledOut, setSessionFilledOut] = useState(false);
  const idStudent = useSelector((state) => state.auth.user.id);
  const baseUrl = "https://fathomless-bastion-33135.herokuapp.com";

  useEffect(() => {
    if (idStudent) {
      axios
        .get(`${baseUrl}/api/dashboard/assigned-session/${idStudent}/${id}`)
        .then((response) => {
          // setSessions(response.data)
          if (response.data.length > 0) {
            setSessionFilledOut(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idStudent, id]);

  // console.log(sessionFilledOut)

  return (
    <>
      <div className={styles.whitebox}>
        <div className={styles.sessionHab}>
          <h3 className={styles.title}>
            {`Sesión ${numSession} - Habilitada`}
          </h3>
        </div>
        <div className={styles.buttonsContainer}>

        <div >
          <h4 className={styles.subtitles}>
          Rango de fechas para agendar tu sesión de mentoría
          </h4>
        <p className={styles.note}>
          *Al dar click en el botón podrás escoger la fecha de tu sesión de
          mentoria
        </p>
        </div>
        <div >
          <h4 className={styles.subtitles}>Fecha inicial</h4>
          <p className={styles.info}>{startDate}</p>
          <h4 className={styles.subtitles}>Fecha final</h4>
          <p className={styles.info}>{endDate}</p>
        </div>
        <div >
          {/* {sessionFilledOut ? (
          <Link to={"/student-assignment-sessions"} className={styles.btn}>
            Ir a la sesión agendada
          </Link>
        ) : ( */}
          <Link to={`/calendar/${id}`} className={styles.btn}>
            Agendar sesión
          </Link>
          <Link to={`/`} className={styles.btn}>
            Ver informe
          </Link>
          <Link to={`/`} className={styles.btn}>
            Ver formulario
          </Link>
          {/* )} */}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default SchedulledSessionCard;
