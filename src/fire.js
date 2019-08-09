import * as firebase from 'firebase/app';
import 'firebase/database';

var config = {
	apiKey: process.env.API_KEY,
	authDomain: 'react-chatroom-34226.firebaseapp.com',
	databaseURL: 'https://react-chatroom-34226.firebaseio.com',
	projectId: 'react-chatroom-34226',
	storageBucket: '',
	messagingSenderId: '929125491699',
	appId: '1:929125491699:web:6b2c8cbe793a7f55'
};

var fire = firebase.initializeApp(config);

export default fire;
