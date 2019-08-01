import React, { useState } from 'react';
import styled from 'styled-components';

import fire from '../fire';

export default function LandingPage() {
	const [nickname, setNickname] = useState('');
	const [email, setEmail] = useState('');

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
		userdb.push({ nickname: nickname, email: email });
	};

	return (
		<Wrapper>
			<FormWrapper>
				<FormTitle>Register User</FormTitle>
				{console.log(nickname)}
				{console.log(email)}
				<Form onSubmit={handleRegisterUser}>
					<UserLabels>Nickname</UserLabels>
					<Username
						placeholder='Enter nickname'
						onChange={handleNicknameChange}
					/>
					<UserLabels>Email</UserLabels>
					<UserEmail placeholder='Enter email' onChange={handleEmailChange} />
					<button type='submit'>Submit</button>
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

const Username = styled.input`
	width: 16rem;
`;

const UserEmail = styled.input`
	width: 16rem;
`;
