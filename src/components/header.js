import React from 'react';
import styled from 'styled-components';
import useLocalStorageWithState from '../hooks/useLocalStorageWithState';

export default function Header() {
	const [value, setValue] = useLocalStorageWithState('userData');

	const SignOut = () => {
		setValue(null);
	};
	return (
		<Wrapper>
			<ChatName>React & Firebase Chatroom</ChatName>
			<SignOutButton onClick={SignOut}>Sign out</SignOutButton>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
	background-color: black;
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid lightgreen;
`;

const ChatName = styled.h1`
	padding: 1rem 2rem;
	border-bottom: 1px solid black;
	box-sizing: border-box;
	color: lightgreen;
`;

const SignOutButton = styled.button`
	margin: 2rem;
	background-color: black;
	color: lightgreen;
	border: 1px solid lightgreen;
	border-radius: 5px;
	padding: 1rem 2rem;
`;
