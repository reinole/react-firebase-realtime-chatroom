import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fire from '../fire';

export default function GlobalChatPage() {
	const [messages, setMessages] = useState([]);
	const [newMsg, setNewMsg] = useState('');

	const globalChat = fire
		.database()
		.ref()
		.child('messages');

	useEffect(() => {
		const handleNewMessages = snap => {
			if (snap.val()) setMessages(snap.val());
		};
		globalChat.once('value', handleNewMessages);

		return () => {
			globalChat.off('value', handleNewMessages);
		};
	}, []);

	const handleMsgChange = e => {
		setNewMsg(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			globalChat.push(newMsg);
			setNewMsg('');
		}
	};

	return (
		<Wrapper>
			<ChatName>Global Chat</ChatName>
			<MessageWindow>
				<ul>
					{Object.keys(messages).map(message => {
						return (
							<DisplaySenderMessages>{messages[message]}</DisplaySenderMessages>
						);
					})}
				</ul>
			</MessageWindow>
			<SendMessageForm>
				<SendMessageInput
					placeholder='Write your message'
					onChange={handleMsgChange}
					onKeyDown={handleKeyDown}
				/>
			</SendMessageForm>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	box-sizing: border-box;
`;

const ChatName = styled.h1`
	padding: 1rem 2rem;
	border-bottom: 1px solid black;
	box-sizing: border-box;
`;

const MessageWindow = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 0 3rem;

	ul {
		padding: 0;
	}
`;

const DisplaySenderMessages = styled.div`
	background-color: lightblue;
	margin: 8px;
	border-radius: 50px;
	padding: 0.5rem 1rem;
	box-sizing: border-box;
`;

const DisplayOtherMessages = styled.div``;

const SendMessageForm = styled.form``;

const SendMessageInput = styled.input`
	bottom: 0;
	width: 100%;
	padding: 1rem 1rem 2rem 1rem;
	font-size: 1rem;
	box-sizing: border-box;
	margin-bottom: 2rem;
`;
