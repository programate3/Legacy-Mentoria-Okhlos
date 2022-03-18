import style from "./ListStudentMentor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../../../components/Sidebar/Sidebar";
export default function ListStudentMentor(props) {
  const { students, mentors, done, match, calculateMatch } = props;

  return (
    <div className={style.container}>
      <Sidebar />
      <div>
        <div className={style.containerbutton}>
        <button
          style={{ display: done ? "none" : "block" }}
          onClick={calculateMatch}
        >
          Hacer Match
        </button>
        </div>
        <h2>Lista de Estudiantes</h2>
        <div class="table-responsive">
          <table className={style.table}>
            <thead>
              <tr>
                <th>Id </th>
                <th>1° Nombre</th>
                <th>2° Nombre</th>
                <th>1° Apellido</th>
                <th>2° Apellido</th>               
                <th>N° Teléfono </th>
                <th>E-mail</th>
                <th>Intereses</th>
                
              </tr>
            </thead>

            <tbody>
              {students.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.middleName}</td>
                    <td>{e.user_id.lastName}</td>
                    <td>{e.user_id.secondSurname}</td>
                    <td>{e.user_id.contactNumber}</td>
                    <td>{e.user_id.email}</td>
                    <td>{e.user_id.actualAge}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2>Lista de Mentores</h2>
        <div class="table-responsive">
          <table className={style.table}>
          <thead>
            <tr>
              <th>Id </th>
              <th>1° Nombre</th>
              <th>2° Nombre</th>
              <th>1° Apellido</th>
              <th>2° Apellido</th>
              <th>Edad</th>
              <th>Genero</th>
              <th>Intereses</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((e, index) => {
              return (
                <tr key={e.id}>
                  <td>{index + 1}</td>
                  <td>{e.user_id.name}</td>
                  <td>{e.user_id.middleName}</td>
                  <td>{e.user_id.lastName}</td>
                  <td>{e.user_id.secondSurname}</td>
                  <td>{e.user_id.actualAge}</td>
                  <td>{e.user_id.contactNumber}</td>
                    <td>{e.user_id.email}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
      {done && (
        <div>
          <h2>Match Estudiante Mentor</h2>
          <div class="table-responsive">
          <table className={style.table}>
          <thead>
              <tr>
                <th>N° </th>
                <th>Nombres Estudiante</th>
                <th>Apellidos Estudiante</th>
                <th>Nombres Mentor</th>
                <th>Apellidos Mentor</th>
              </tr>
          </thead>
          <tbody>
              {match.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.nameEstudent}</td>
                    <td>{e.lastNameEstudent}</td> 
                    <td>{e.nameMentor}</td>
                    <td>{e.lastNameMentor}</td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className={style.containerbutton}>
      <button
        style={{ display: done ? "none" : "block" }}
        onClick={calculateMatch}
      >
        Hacer Match
      </button>
      </div>
    </div>
  );
}
