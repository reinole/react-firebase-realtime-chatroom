import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import GlobalChatPage from './pages/GlobalChatPage';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' component={LandingPage} />
				<Route path='chat' component={GlobalChatPage} />
			</div>
		</BrowserRouter>
	);
}

export default App;
