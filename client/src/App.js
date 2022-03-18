	// it gives us the store's dispatch method as its result
	const dispatch = useDispatch();
	// save the token stored in the redux store
	const token = useSelector((state) => state.token);
	// save auth state stored in redux store
	const auth = useSelector((state) => state.auth);
	// save isLogged from auth
	const { isLogged } = auth;
	// this useState is used to see if the student has already filled the interests
	const [interest, setInterest] = useState(false);
	// url constant //
	const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com';

	useEffect(() => {
		// collects the value of loggedOkhlosUser from localStorage
		const loggedUserJSON = window.localStorage.getItem('loggedOkhlosUser');
		// collects the value of firstLogin from localStorage
		const firstLogin = localStorage.getItem('firstLogin');
		// if firstLogin and loggedUserJSON exist run the following
		if (firstLogin && loggedUserJSON) {
			// convert received data to javascript object
			const user = JSON.parse(loggedUserJSON);
			// save the user's refresToken
			const refreshtoken = user.refresh_token;
			const getToken = async () => {
				// send the refreshToken to the backend path
				const res = await axios.post(`${baseUrl}/api/refresh_token`, {
					refreshtoken,
				});
				// calls an action to trigger a state change
				dispatch({ type: 'GET_TOKEN', payload: res.data.access_token });
			};

			// the getToken function is called
			getToken();
		}
	}, [auth.isLogged, dispatch]);

	useEffect(() => {
		// check if the token exists
		if (token) {
			//
			const getUser = () => {
				//
				dispatch(dispatchLogin());
				return fetchUser(token).then((res) => {
					dispatch(dispatchGetUser(res));
				});
			};
			// the getUser function is called
			getUser();
		}
	}, [token, dispatch]);

	const idStudent = useSelector((state) => state.auth.user.id);

	useEffect(() => {
		if (idStudent) {
			axios.get(`${baseUrl}/api/student-interest/${idStudent}`).then((res) => {
				const interest = res.data;
				// console.log(interest)
				if (interest[0].interestsStudent.length > 0) {
					setInterest(true);
				}
			});
		}
	}, [idStudent, auth.isLogged]);

	return (
		<>
			{/* <Navbar /> */}
			<NavAdmin />
			<Routes>
				<Route
					path="/"
					element={isLogged ? <StudentSession /> : <Login />}
					exact
				/>
				<Route
					path="/forgot_password"
					element={isLogged ? <WelcomeUser /> : <ForgotPassword />}
					exact
				/>

				{/* others */}
				<Route path="/principal-view" element={<PrincipalView />} />
				<Route
					path="/welcome-user"
					element={interest ? <Thanks /> : <MultipleChoice />}
				/>
				<Route path="/thanks-student" element={<Thanks />} />
				<Route path="/welcome-student" element={<WelcomeStudent />} />
				<Route path="/calendar/:id" element={<Calendar />} />
				<Route path="/form-student/:id" element={<FirstStudentForm />} />
				{/* <Route path="/thanks-student" element={<Thanks/>}/> */}
				<Route path="/inform-student/:id" element={<FirstStudentInform />} />
				<Route path="/student-sessions" element={<StudentSession />} />
				<Route
					path="/student-assignment-sessions"
					element={<AssigmentSessionBoard />}
				/>
				<Route path="/MultipleChoice" element={<MultipleChoice />} />

				<Route path="/MatchForm" element={<MatchForm />} />
				<Route path="/AsignedSessions" element={<AsignedSessions />} />
				<Route path="/welcome-mentor" element={<WelcomeMentor />} />
				<Route path="/FormMentor" element={<FormMentor />} />
				<Route path="/FinalMessage" element={<FinalMessage />} />
				<Route path="/WaitMessage" element={<WaitMessage />} />

				<Route path="/CrudStudents" element={<CrudStudents />} />
				<Route path="/crud-mentors" element={<CrudMentors />} />
				<Route path="/crud-sessions-detail" element={<CrudSessionsDetail />} />
				<Route path="/crud-sessions" element={<CrudSessions />} />

				<Route
					path="*"
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
