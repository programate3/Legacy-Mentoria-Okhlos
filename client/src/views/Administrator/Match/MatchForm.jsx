
import { useState } from 'react'
import Styles from './matchform.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'
import Sidebar from '../../../components/Sidebar/Sidebar'

import ListStudentMentor from './components/ListStudentMentor/ListStudentMentor';

const MatchForm = () => {
  let cohort = 0
  let program = ""
  const [students, setStudents] = useState([])
  const [mentors, setMentors] = useState([])
  // permite controlar que componente se va a renderizar: <ListStudentMentor/> ó <ProgramAndCohort/>
  const [chosenProgram, setChosenProgram] = useState(false)
  // almacena true si el match se realizo con éxito
  const [done, setDone] = useState(false)
  // almacena los datos de estudiantes y mentores una vez realizado el match
  const [match, setMatch] = useState([])

  const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'

  // almacena el valor escogido en la seccion de cohorte (corregir)
  const handleTypeSelect = e => {
    cohort = e.label
  };

  // almacena el valor escogido en la seccion de programa (corregir)
  const handleSelectPrograms = i => {
    program = i.label
  };

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

  const programs = [
    {
      value: 'Programate',
      label: 'Programate'
    },
    {
      value: 'Administración de Empresas',
      label: 'Administración de Empresas'
    }
  ]

  const getValuesFinal = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/match/students/${program}/${cohort}`)
      if (res.status === 200) {
        setStudents(res.data)
      }
    } catch (err) {
      console.log(err)
    }
    getValuesMentor()
  }

  // En esta funcion se consultan los mentores
  const getValuesMentor = async () => {
    try {
      const resp = await axios.get(`${baseUrl}/api/match/mentor/${program}/${cohort}`)
      if (resp.status === 200) {
        setChosenProgram(true)
        setMentors(resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // logica del match linea 97 a 210
  let resultInterest = 0
  let resultAge = 0
  let competencies = 0
  let gender = 0
  let total = 0
  let count = 0

  function Interests(est, m) {
    let count = 0
    // Interests the student and mentor
    for (let i = 0; i < 3; i++) {
      // const result = students[est].interestsStudent[i].includes(mentors[m].interestsMentor)
      const result = mentors[m].interestsMentor.includes(students[est].interestsStudent[i])
      if (result === true) {
        if (count === 0) {
          count = 5
        } else {
          count += 10
        }
      }
      // debugger
    }

    return count
  }

  function Age(est, m) {
    let count = 0
    // Actual age the student and mentor
    if (students[est].actualAge === mentors[m].actualAge) {
      count = 25
    } else if (students[est].actualAge + 5 >= mentors[m].actualAge & students[est].actualAge - 5 <= mentors[m].actualAge) {
      count = 15
    } else {
      count = 5
    }
    return count
  }

  function Competencies(est, m) {
    let count = 0
    // Commitment the student and mentor
    if (students[est].commitment === 3 && mentors[m].commitment === 1) {
      count += 10
    } else if (students[est].commitment < 3 && mentors[m].commitment < 3) {
      count += 10
    }
    // Achievement Orientation the student and mentor
    if (students[est].achievementOrientation === 3 && mentors[m].achievementOrientation === 1) {
      count += 10
    } else if (students[est].achievementOrientation < 3 && mentors[m].achievementOrientation < 3) {
      count += 10
    }
    // Flexibility the student and mentor
    if (students[est].flexibility === 3 && mentors[m].flexibility === 1) {
      count += 10
    } else if (students[est].flexibility < 3 && mentors[m].flexibility < 3) {
      count += 10
    }
    // Communication the student and mentor
    if (students[est].assertiveCommunication === 3 && mentors[m].assertiveCommunication === 1) {
      count += 10
    } else if (students[est].assertiveCommunication < 3 && mentors[m].assertiveCommunication < 3) {
      count += 10
    }
    return count
  }

  function Gender(est, m) {
    let count = 0
    if (students[est].studentsGenderPrefer === mentors[m].gender) {
      count = 10
    }
    return count
  }

  function findHighScore(possibleMentors){
    let mayor = possibleMentors[0];
    for(let i=1 ; i<possibleMentors.length ; i++){
      if(mayor.score < possibleMentors[i].score){
        mayor =  possibleMentors[i];
      }
    }
    return mayor.mentor.user_id.name;
  }

  //Funcion que hace el match
  const calculateMatch = () => {
    for (let est = 0; est < students.length; est++) {
      let possibleMentors = [];
      for (let m = count; m < mentors.length; m++) {
        resultInterest = Interests(est, m)
        resultAge = Age(est, m)
        competencies = Competencies(est, m)
        gender = Gender(est, m)

        total = resultInterest + resultAge + competencies + gender

        possibleMentors.push({
          score: total, 
          mentor: mentors[m]
        });
      }
      setMatch(prev => [...prev, {
        nameEstudent: students[est].user_id.name,
        nameMentor: findHighScore(possibleMentors)
      }]);
    }
    setDone(true)
  }

  // Componente que renderiza el formulario de programa y cohorte
  const ProgramAndCohort = () => {

    return (
      <div className={Styles.contenedor}>
        <Sidebar/>
        <div className={Styles.heder}></div>

        <Card
          container={
            <>
              <h3>Elige la cohorte y el programa para realizar el Match</h3>
              <p>Elige la cohorte</p>

              <Select
                name='cohorte'
                options={cohorte} // Options to display in the dropdown
                onChange={handleTypeSelect}
              />

              <p>Elige el programa.</p>

              <Select
                name='programs'
                options={programs} // Options to display in the dropdown
                onChange={handleSelectPrograms}
              />

              <br />
            </>
          }
          bottom={<button onClick={getValuesFinal}>Aceptar</button>}
        />
      </div>
    )
  }

  return <>{chosenProgram ? 
    <ListStudentMentor 
      students={students}
      mentors={mentors}
      done={done}
      match={match}
      calculateMatch={calculateMatch}
    /> : 
    <ProgramAndCohort />}</>
}

export default MatchForm