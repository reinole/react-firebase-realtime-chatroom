import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import fire from '../fire';

export default function Chatwindow() {
	const [messages, setMessages] = useState({});

	const messagesEndRef = React.createRef(null);

	const globalChat = fire
		.database()
		.ref()
		.child('messages');

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		const handleNewMessages = snap => {
			if (snap.val()) {
				setMessages(snap.val());
			}
		};

		globalChat.on('value', handleNewMessages);

		return () => {
			globalChat.off('value', handleNewMessages);
		};
	}, []);

	useEffect(scrollToBottom, [messages]);

	return (
		<Wrapper>
			<List>
				{Object.keys(messages).map(message => {
					return (
						<DisplaySenderMessages>
							<MessageSender>{messages[message].sender}: </MessageSender>
							<DisplayMessage>{messages[message].message}</DisplayMessage>
						</DisplaySenderMessages>
					);
				})}
				<ScrollToDiv ref={messagesEndRef} />
			</List>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: fixed;
	top: 7.5rem;
	bottom: 4.4rem;
	width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: black;
`;

const ScrollToDiv = styled.div``;

const MessageSender = styled.span`
	color: lightgreen;
`;

const DisplayMessage = styled.span`
	color: lightgreen;
`;

const List = styled.ul`
	padding: 0;
	box-sizing: border-box;
	background-color: black;
	margin-top: 0;
`;
const MessageWindow = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 0 3rem;
	ul {
		padding: 0;
		height: 21rem;
		overflow: scroll;
	}
`;

const DisplaySenderMessages = styled.li`
	margin: 8px;
	border-radius: 50px;
	box-sizing: border-box;
	margin-top: 0;
`;
