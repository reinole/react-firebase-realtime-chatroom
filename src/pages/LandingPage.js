import React, { useState } from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';

import useLocalStorageWithState from '../hooks/useLocalStorageWithState';
import fire from '../fire';

export default function LandingPage() {
	const [nickname, setNickname] = useState('');
	const [email, setEmail] = useState('');

	const [value, setValue] = useLocalStorageWithState('userData');

	const userdb = fire
		.database()
		.ref()
		.child('users');

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handleNicknameChange = e => {
		setNickname(e.target.value);
	};

	const handleRegisterUser = () => {
		// Først sjekk om eposten er registrert
		// sjekk om brukernavnet er i bruk
		//userdb.once('value', handleNewMessages);

		const userObj = {
			nickname: nickname,
			email: email
		};

		userdb.push({ nickname: nickname, email: email, uid: uuid4() });
		setValue(JSON.stringify(userObj));
	};

	return (
		<Wrapper>
			<FormWrapper>
				<FormTitle>Register User</FormTitle>

				<Form onSubmit={handleRegisterUser}>
					<UserLabels>Nickname</UserLabels>
					<InputField
						placeholder='Enter nickname'
						type='text'
						onChange={handleNicknameChange}
						required
						minLength='5'
						maxLength='15'
					/>
					<UserLabels>Email</UserLabels>
					<InputField
						placeholder='Enter email'
						type='email'
						onChange={handleEmailChange}
						required
					/>
					<SubmitButton type='submit'>Register and enter chat</SubmitButton>
				</Form>
			</FormWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16rem;
`;

const FormWrapper = styled.div`
	margin: auto;
`;

const FormTitle = styled.h1`
	margin: auto;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: auto;
`;

const UserLabels = styled.label``;

const InputField = styled.input`
	border-radius: 5px;
	border: 1px solid pink;
	padding: 0.7rem 1rem 0.5rem 1rem;
	width: 16rem;
	margin-bottom: 0.5rem;
`;

const SubmitButton = styled.button`
	border-radius: 5px;
	border: 1px solid pink;
	padding: 0.7rem 1rem 0.5rem 1rem;
	width: 100%;
	margin-top: 0.5rem;
	background-color: white;
	font-weight: bold;
`;
