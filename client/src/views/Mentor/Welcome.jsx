import './welcome.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LogoPromgramate from '../../components/assets/images/programate-solo-color.png';

const Welcome= () => {

  const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'

  const [data, setData] = useState([])

  const idMentor = useSelector(state => state.auth.user.id)

  useEffect(() => {
    axios({
      url: `${baseUrl}/api/one/mentor/${idMentor}`
    })
      .then(response => {
        setData(response.data)
        //console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const navigate = useNavigate()

  
   
  
  
  const getInterest = () => {
    if(data.length > 0){
      if(data[0].interestsMentor.length > 0) {
        navigate('/')
      }
    }
  }

  getInterest()

  return (
    <section class="container-homesession">
        <div className='logoContainer'>
          <img  src={LogoPromgramate} alt="logo" className='logoImg' />
        </div>
        <div className="welcome-mentor">
          <h2 className='mentortitle'>Estimado mentor(a)</h2>
          <ul className='check-mentor'>
            <li>Gracias por realizar la inscripción.</li>

            <li>
              {" "}
              No olvides completar los 3 pasos para crear tú perfil como mentor.
            </li>
            <li>
              Contacta con el equipo administrativo de Educamás, si tienes
              alguna duda.
            </li>
          </ul>
          <Link className="btn-welcom-mentor" to="/FormMentor">
            {" "}
            Siguiente
          </Link>
        </div>
      
    </section>
  );
  
}

export default Welcome
