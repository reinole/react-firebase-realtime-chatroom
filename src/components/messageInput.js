import React, { useState } from 'react';
import styled from 'styled-components';

import fire from '../fire';
import useLocalStorageWithState from '../hooks/useLocalStorageWithState';

export default function MessageInput() {
	const [newMsg, setNewMsg] = useState('');
	const [value] = useLocalStorageWithState('userData');

	const globalChat = fire
		.database()
		.ref()
		.child('messages');

	const handleMsgChange = e => {
		setNewMsg(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			globalChat.push({ sender: value, message: newMsg });
			setNewMsg('');
		}
	};
	return (
		<SendMessageForm>
			<SendMessageInput
				placeholder='Write your message'
				onChange={handleMsgChange}
				onKeyDown={handleKeyDown}
				value={newMsg}
			/>
		</SendMessageForm>
	);
}

const SendMessageForm = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
`;

const SendMessageInput = styled.input`
	bottom: 0;
	width: 100%;
	padding: 1rem 1rem 2rem 1rem;
	font-size: 1rem;
	box-sizing: border-box;
`;
