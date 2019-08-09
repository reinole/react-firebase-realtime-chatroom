import React, { useGlobal } from 'reactn';

const useGlobalUser = () => {
	const [user, setUser] = useGlobal('user');
};

export default useGlobalUser;
