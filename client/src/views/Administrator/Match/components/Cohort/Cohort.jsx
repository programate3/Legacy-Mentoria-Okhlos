import style from './Cohort.module.css';

import Select from 'react-select';
import Sidebar from '../../../../../components/Sidebar/Sidebar';
import Card from '../../../../../components/Card/Card';
import Select from 'react-select';
import NavAdmin from '../../../NavAdmin/NavAdmin';


export default function Cohort(props) {
  const { handleTypeSelect, getValuesFinal } = props;

  const cohorte = [
    {
      value: 1,
      label: 1
    },
    {
      value: 2,
      label: 2
    },
    {
      value: 3,
      label: 3
    },
    {
      value: 4,
      label: 4
    }
  ]

	return (
		<div className={style.contenedor}>
		
		
			<div className={style.text}>
				<h4 >Selecciona la cohorte para realizar el Match.</h4>
			</div>
			<div className={style.cardSelect}>
			
				{
					<>
						<h5>Selecciona una opción</h5>
        {/*
			<div className={style.heder}></div>

			<Card
				container={
					<>
						<h3>Elige la cohorte y el programa para realizar el Match</h3>
						<p>Elige la cohorte</p>*/}
						<Select
							name="cohorte"
							options={cohorte}
							onChange={handleTypeSelect}
						/>
						<br />

						{<button className={style.buttonSelect} onClick={getValuesFinal}>Aceptar</button>}
					</>
				}
				
		
			</div>

		</div>
	);
}
