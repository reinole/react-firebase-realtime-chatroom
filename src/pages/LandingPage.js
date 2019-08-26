import React, { useState } from 'reactn';
import styled from 'styled-components';

import useLocalStorageWithState from '../hooks/useLocalStorageWithState';

export default function LandingPage() {
	const [nickname, setNickname] = useState('');

	const [value, setValue] = useLocalStorageWithState('userData');

	const handleNicknameChange = e => {
		setNickname(e.target.value);
	};

	const handleRegisterUser = e => {
		setValue(nickname, nickname);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handleRegisterUser();
		}
	};

	return (
		<Wrapper>
			<FormWrapper>
				<FormTitle>Register User</FormTitle>
				<Form>
					<UserLabels>Nickname</UserLabels>
					<InputField
						placeholder='Enter nickname'
						type='text'
						onChange={handleNicknameChange}
						required
						minLength='3'
						maxLength='15'
						onKeyDown={handleKeyDown}
					/>

					<SubmitButton onClick={handleRegisterUser} type='submit'>
						Register and enter chat
					</SubmitButton>
				</Form>
			</FormWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
	height: 100%;
`;

const FormWrapper = styled.div`
	margin: auto;
`;

const FormTitle = styled.h1`
	margin: auto;
`;

const Form = styled.div`
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
