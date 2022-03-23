import { useState, useEffect } from 'react';
import styles from './CrudSessions.module.css';
import SearchContainer from '../../../../components/SearchContainer/SearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEdit,
	faTrashAlt,
	faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';
import axios from 'axios';


const Articles=[{
  IdEstudiante:"id Estudiante" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Sesión N°" 
}]
/* toca conectar esto con la base de datos */
const Database=[{
  IdEstudiante:"30" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Sesión N°"
},
{
  IdEstudiante:"id Estudiante" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Sesión N°"
},
{
  IdEstudiante:"id Estudiante" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Sesión N°"
},
{
  IdEstudiante:"id Estudiante" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Sesión N°"
},
{
  IdEstudiante:"id Estudiante" ,
  Estudiante:"Estudiante",
  FechaDiligenciamiento  :"Fecha Diligenciamiento",
  SesiónN:"Lorem ipsum dolor sit lx ."
}
]

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

const CrudSessions = () => {
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
	//function that searches the database for data
	/*const petitionGet=async()=>{
 await axios.get(Database)
  .then(response=>{
    console.log(response.data)
  })
}
useEffect(async()=>{
 await petitionGet();
},[])



//function that inserts data into the database

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
			<h3 className={styles.h3}>EDITAR UNA SESION</h3>
			<TextField
				name="id"
				className={Styles.inputMaterial}
				label="Id Estudiante"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/>
			<br />
			<TextField
				name="Nombres"
				className={Styles.inputMaterial}
				label="Estudiante"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/>
			<br />
			<TextField
				name="Apellidos"
				className={Styles.inputMaterial}
				label="Fecha Diligenciamiento"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/>
			<br />
			<TextField
				name="Género"
				className={Styles.inputMaterial}
				label="Sesión N°"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/>
			<br />
			<br />
			<div align="center" >
				<button className={styles.button} /* onClick={()=>petitionPost()}*/>
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
			<SearchContainer
				h1={'TABLA DE DETALLE DE SESIONES '}
				placeholder={'Buscar Sesión'}
				button={'Insertar Sesión'}
				onClick={() => openedClosedModalInsertar()}
			/>
			<div class={styles.containerTable}>
				<table className={styles.table}>
					<thead>
				{Articles.map((e) => {
					return (
						<tr>
							<th>{e.IdEstudiante}</th>
							<th>{e.Estudiante}</th>
							<th>{e.FechaDiligenciamiento}</th>
							<th>{e.SesiónN}</th>
							<th>Acciones</th>
							
						</tr>
					);
				})}

					</thead>
					<tbody>
				{Database.map((e) => {
					return (
						<tr>
							<td>{e.IdEstudiante}</td>
							<td >{e.Estudiante}</td>
							<td > {e.FechaDiligenciamiento}</td>
							<td >{e.SesiónN}</td>

							<>
								<td>
								<div className={styles.containerbutton}>
									<button id={styles.update}>
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button id={styles.delete}>
										<FontAwesomeIcon icon={faTrashAlt} />
									</button>
									</div>
								</td>
								
							</>
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

export default CrudSessions;
