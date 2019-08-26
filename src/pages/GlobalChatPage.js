import React, { useEffect } from 'react';
import styled from 'styled-components';

import LandingPage from './LandingPage';
import useLocalStorageWithState from '../hooks/useLocalStorageWithState';
import MessageInput from '../components/messageInput';

import Header from '../components/header';
import ChatWindow from '../components/chatWindow';

export default function GlobalChatPage() {
	const [value] = useLocalStorageWithState('userData');

	//check value of localstorage on mount
	// if nothing there show LandingPage
	// if nickname there do not show LandingPage

	const checkLocalStorage = () => {
		if (value === 'null' || value === '' || value === null) {
			return <LandingPage />;
		}
	};

	useEffect(() => {
		checkLocalStorage();
	}, [value]);

	return (
		<Wrapper>
			<Header />
			{value === 'null' || value === '' || value === null ? (
				<LandingPage />
			) : (
				<div>
					<ChatWindow />
					<MessageInput />
				</div>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	overflow: hidden;
`;
