import { rootURL, getSesstion } from './index';
import sendRequest from './sendRequest';

export function createBusiness(names, onSuccess, onError){
	var session = getSesstion();
	
	sendRequest(
		"post",
		rootURL + '/api/v1/business/create',
		{
			id: session._id,
			token: session.tokenData,
			names:names
		},
		onSuccess,
		onError
	)
}
