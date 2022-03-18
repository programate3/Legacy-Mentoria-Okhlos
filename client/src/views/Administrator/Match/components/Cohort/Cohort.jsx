import style from './Cohort.module.css';

import Select from 'react-select';

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
