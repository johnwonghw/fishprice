import handle418Error from './418';

export default function handle(errorData, langCode){
	var errorCode = parseInt(errorData.error);
	var message = errorData.message;

	switch (errorCode) {
		case 418:
			return handle418Error(message, langCode);
			break;
		default:
			console.log(errorData, langCode);
			return [];
	}
}
