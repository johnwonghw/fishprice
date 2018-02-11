import { rootURL } from './index';
import sendRequest from './sendRequest';

export function loginByEmailAndPassword(credential, onSuccess, onError){
	sendRequest(
		"post",
		rootURL + '/api/v1/user/login/byEmailAndPassword',
		{
			email: credential.email,
			password: credential.password
		},
		onSuccess,
		onError
	)
}
export function registerByEmailAndPassword(credential, onSuccess, onError){
	sendRequest(
		"post",
		rootURL + '/api/v1/user/register/byEmailAndPassword', {
			email: credential.email,
			password: credential.password,
			password_confirmation: credential.password_confirmation
		},
		onSuccess,
		onError
	)
}
export function getUserInfo(userData, onSuccess, onError){
	sendRequest(
		"get",
		rootURL + '/api/v1/user/getInfo', {
			id:userData.user_id,
			token:userData.token
		},
		onSuccess,
		onError
	)
}
