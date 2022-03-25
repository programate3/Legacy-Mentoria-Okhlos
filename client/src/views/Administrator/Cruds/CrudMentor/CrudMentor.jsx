import { useState, useEffect } from 'react';
import styles from './CrudMentor.module.css';
import SearchContainer from '../../../../components/SearchContainer/SearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';
import Axios from 'axios';


const baseUrl = 'http://localhost:3001';

//Yellow row data
const Articles = [
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Asignación Est',
	},
];
//Table data
const Database = [
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Asignación Est',
	},
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Asignación Est',
	},
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Asignación Est',
	},
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Asignación Est',
	},
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Lorem  vitae.',
	},
	{
		Id: 'id',
		Nombres: 'Nombres',
		Apellidos: 'Apellidos',
		Edad: 'Edad',
		Género: 'Género',
		Intereses: 'Intereses ',
		Programa: 'Programa ',
		Carrera: ' Carrera  ',
		Empresa: ' Empresa  ',
		AsignaciónEst: 'Lorem  vitae.',
	},
];

//Modal styles
const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	iconos: {
		cursor: 'pointer',
	},
	inputMaterial: {
		width: '100%',
	},
	h3: {
		fontFamily: 'Gilroy-ExtraBold ',
		color: '#92C149',
	},
	Button: {
		backgroundColor: '#FFCC02',
		color: '#010101',
		margin: '0rem 0.5rem 0rem 0rem',
		'&:hover': {
			backgroundColor: '#92C149',
		},
	},
}));

const CrudMentor = () => {
	const [data, setData] = useState([]);
	const Styles = useStyles();
	const [modalinsertar, setmodalinsertar] = useState(false);
	//Insert saved module data
	const [SavedData, setSavedData] = useState({
		id: '',
		Nombres: '',
		Apellidos: '',
		Edad: '',
		Género: '',
		Intereses: '',
		Programa: '',
		Carrera: '',
		Empresa: '',
		AsignaciónEst: '',
	});
	//Function to insert the data written in the module.
	const InsertData = (e) => {
		const { name, value } = e.target;
		setSavedData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		console.log(SavedData);
	};

	//function that inserts data into the database
	const [students, setStudents] = useState([]);

	useEffect(() => {
		Axios({
			url: `${baseUrl}/api/mentorViewStudent`,
		})
			.then((response) => {
				setStudents(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setStudents]);

	/*const petitionPost=async()=>{
  await axios.post(Database,SavedData)
  .then(response=>{
    setData(data.concat(response.data),
    openedClosedModalInsertar()
  )
  })
}*/

	//one-button boolean function
	const openedClosedModalInsertar = () => {
		setmodalinsertar(!modalinsertar);
	};

	//Modal structure Insertar

	const bodyInsertar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>AGREGAR NUEVO MENTOR</h3>

			<div className="row">
				<div className="form-group col-md-6">
					<TextField
						name="Nombres"
						className={Styles.inputMaterial}
						label="Nombre"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="Apellidos"
						className={Styles.inputMaterial}
						label="Apellido"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<TextField
						name="Género"
						className={Styles.inputMaterial}
						label="Género"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="Edad"
						className={Styles.inputMaterial}
						label="Edad"
						onChange={InsertData}
					/>
				</div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<TextField
						name="Hijos"
						className={Styles.inputMaterial}
						label="Hijos"
						onChange={InsertData}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="Intereses"
						className={Styles.inputMaterial}
						label="Intereses"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<TextField
						name="Programa"
						className={Styles.inputMaterial}
						label="Programa"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="Carrera"
						className={Styles.inputMaterial}
						label="Carrera"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
			</div>
			<div className="row">
				<div className="form-group col-md-6">
					<TextField
						name="Empresa"
						className={Styles.inputMaterial}
						label="Empresa"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
				<div className="form-group col-md-6">
					<TextField
						name="AsignaciónEst"
						className={Styles.inputMaterial}
						label="Asignación Est"
						onChange={InsertData}
						value={SavedData && SavedData.Nombres}
					/>
				</div>
			</div>
			<br></br>
			<br></br>

			<div align="center">
				<button className={styles.button} /*onClick={()=>petitionPost()}*/>
					Insertar
				</button>
				<button
					className={styles.button}
					onClick={() => openedClosedModalInsertar()}
				>
					Cancelar
				</button>
			</div>
		</div>
	);

	return (
		<div className={styles.container}>
			<h1>TABLA CONTROL MENTORES</h1>
		 <div className={styles.header}>
          <input type="search" placeholder="Busca un Mentor" />
          <button onClick={() => openedClosedModalInsertar()}>
            Insertar Mentor
          </button>

          <button>Insertar SVC</button>
          <button>Descargar SVC</button>
        </div>

			{/*mapping the yellow row data*/}
			<div class={styles.containerTable}>
				<table className={styles.table}>
					<thead>
						{Articles.map((e) => {
							return (
								<tr>
									<th>{e.Id}</th>
									<th>{e.Nombres}</th>
									<th>{e.Apellidos}</th>
									<th>{e.Edad}</th>
									<th>{e.Género}</th>
									<th>{e.Intereses}</th>
									<th>{e.Programa}</th>
									<th>{e.Carrera}</th>
									<th>{e.Empresa}</th>
									<th>{e.AsignaciónEst}</th>
									<th>Acciones</th>
								</tr>
							);
						})}
					</thead>
					<tbody>
						{Database.map((e) => {
							return (
								<tr>
									<td>{e.Id}</td>
									<td>{e.Nombres}</td>
									<td> {e.Apellidos}</td>
									<td>{e.Edad}</td>
									<td>{e.Género}</td>
									<td>{e.Intereses}</td>
									<td>{e.Programa}</td>
									<td>{e.Carrera}</td>
									<td>{e.Empresa}</td>
									<td>{e.AsignaciónEst}</td>
									<td>
										<div className={styles.containerbutton}>
											<button id={styles.update} onClick={() => openedClosedModalInsertar()}>
												<FontAwesomeIcon icon={faEdit} />
											</button>{' '}
											<button id={styles.delete}>
												<FontAwesomeIcon icon={faTrashAlt} />
											</button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Modal open={modalinsertar} onClose={openedClosedModalInsertar}>
				{bodyInsertar}
			</Modal>
		</div>
	);
};

export default CrudMentor;
