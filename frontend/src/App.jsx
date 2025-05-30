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
	// State for user authentication, loading, profile info, and CSRF token
	const [ currentUser, setCurrentUser ] = useState(false)
	const [ loading, setLoading ] = useState(true)
	const [ profileInfo, setProfileInfo ] = useState()
	const [ csrfToken, setCsrfToken ] = useState('')

	// Check if a user is logged in on mount and when currentUser changes
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

	// Cleanup effect (example: clear timeouts if used elsewhere)
	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);

	// Show x (or a spinner) while loading user info
	if (loading) {
		return <div></div>;
	}

	// Provide context to all child components and set up routes
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
			{/* If logged in, show Dashboard; otherwise, show HomePage */}
			<Route path="/" element={currentUser ? <Dashboard/> : <HomePage />} />
			{/* If logged in, redirect register/login to Dashboard */}
			<Route path="/register" element={currentUser ? <Dashboard/> : <Register />} />
			<Route path="/login" element={currentUser ? <Dashboard/> : <Login />} />
			{/* Always show Dashboard at /dashboard */}
			<Route path="/dashboard" element={<Dashboard/>}
			/>
		</Routes>
		</ClientContext.Provider>
  );
}

export default App;