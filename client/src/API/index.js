export const rootURL = "http://127.0.0.1:8000";

export * from './string';
export * from './language';
export * from './sendRequest';
export * from './account';
export * from './business';

export function getSesstion(){
	return retrieveData("session");
}

export function retrieveData(name){
	var retrievedData = localStorage[name];
	if(retrievedData != null){
		return JSON.parse(retrievedData);
	} else {
		return null;
	}
}
