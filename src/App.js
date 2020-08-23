import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButtom from './components/LogoutButton';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react';

function App() {
	const {isLoading} = useAuth0();
	if (isLoading) return <div>Loading...</div>;

	return (
		<>
			<LoginButton></LoginButton>
			<LogoutButtom></LogoutButtom>
			<Profile></Profile>
		</>
	);
}

export default App;
