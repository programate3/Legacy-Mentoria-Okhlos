/* const [students, setStudents] = useState([])

  useEffect(() => {
    Axios({
      url: 'http://localhost:5001/api/students/control'
    })
      .then(response => {
        setStudents(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setStudents])



  //function that inserts data into the database

  const petitionPost = async () => {
    await axios.post(Database, SavedData)
      .then(response => {
        setData(data.concat(response.data),
          openedClosedModalInsertar()
        )
      })
  }



  //one-button boolean function
  const openedClosedModalInsertar = () => {
    setmodalinsertar(!modalinsertar)

  }


  //Modal structure Insertar

  const bodyInsertar = (
    <div className={Styles.modal}>
      <h3 className={Styles.h3} >AGREGAR NUEVO ESTUDIANTE   </h3>
      <TextField name="id" className={Styles.inputMaterial} label="Id" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Nombres" className={Styles.inputMaterial} label="Estudiante" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Apellidos" className={Styles.inputMaterial} label="Nombres" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Género" className={Styles.inputMaterial} label="Apellidos" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Edad" className={Styles.inputMaterial} label="Edad" onChange={InsertData} />
      <br />
      <TextField name="Intereses" className={Styles.inputMaterial} label="Género" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Programa" className={Styles.inputMaterial} label="Intereses" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Carrera" className={Styles.inputMaterial} label="Programa" onChange={InsertData} value={SavedData && SavedData.Nombres} />
      <br />
      <TextField name="Empresa" className={Styles.inputMaterial} label="Asignación de Mentor" onChange={InsertData} value={SavedData && SavedData.Nombres} />

      <br /><br />
      <div align="right">
        <Button className={Styles.Button} onClick={() => petitionPost()}>Insertar</Button>
        <Button className={Styles.Button} onClick={() => openedClosedModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )


  return (
    <div className={styles.container}>
      <SearchContainer h1={"TABLA CONTROL ESTUDIANTES"} placeholder={"Busca un Estudiante"}
        onClick={() => openedClosedModalInsertar()} />
      <Table th={students.map((e) => {

        <tr className={styles.column}>
          <th>{e.user_id.name}</th>
          <th>{e.user_id.middleName}</th>
          <th>{e.lastName}</th>
          <th>{e.secondSurname}</th>
          <th>{e.role}</th>
          <th>{e.email}</th>
          <th>{e.state}</th>
          <th>Editar</th>
          <th>Eliminar</th>

        </tr>


      })
      }
        th2={students.map((e) => {
          return (
            <tr className={styles.row}>
              <td className={styles.rowone}>{e.user_id.name}</td>
              <td className={styles.rowone}>{e.user_id.middleName}</td>
              <td className={styles.rowone}>{e.lastName}</td>
              <td className={styles.rowone}> {e.secondSurname}</td>
              <td className={styles.rowone}>{e.role}</td>
              <td className={styles.rowone}>{e.email}</td>
              <td className={styles.rowone}>{e.state}</td>
              <>
                <td><button className={styles.update}><FontAwesomeIcon icon={faEdit} /></button></td>
                <td><button className={styles.delete}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
              </>
            </tr>


 */