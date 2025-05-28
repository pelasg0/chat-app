import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./css/index.css";
import { ClientContext, client } from './context/clientContext.js';
import { useState, useEffect } from "react";

function App() {

	const [ currentUser, setCurrentUser ] = useState(false)
	const [ loading, setLoading ] = useState(true)
	const [ profileInfo, setProfileInfo ] = useState()
	const [ csrfToken, setCsrfToken ] = useState('')

  	useEffect(() => {
		client.get("/users/user")
		.then((res) => {
			if (res.data.message === 'No user is logged in.') {
				setCurrentUser(false);
				setLoading(false);
			} else {
				setProfileInfo(res);
				setCurrentUser(true);
				setCsrfToken(res.data.csrf_token);
				setLoading(false);
			}
		})
		.catch((error) => {
			setCurrentUser(false);
			setLoading(false);
		});
	}, [currentUser]);

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);

	if (loading) {
		return <div></div>;
	}

	return (
		<ClientContext.Provider value={{
				client: client,
				currentUser: currentUser,
				setCurrentUser: setCurrentUser,
				profileInfo: profileInfo,
				setProfileInfo: setProfileInfo,
				csrfToken: csrfToken,
		}}>
		<Routes>
			<Route path="/" element={currentUser ? <Dashboard/> : <HomePage />} />
			<Route path="/register" element={currentUser ? <Dashboard/> : <Register />} />
			<Route path="/login" element={currentUser ? <Dashboard/> : <Login />} />
			<Route path="/dashboard" element={<Dashboard/>}
			/>
		</Routes>
		</ClientContext.Provider>
  );
}

export default App;