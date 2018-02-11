import axios from 'axios';
import rootURL from './index.js';
import jQuery from 'jquery';
export default function sendRequest(method = 'get', url, data = {}, onSuccess = defaultOnSuccess, onError = defaultOnError){
	jQuery.ajax({
		type: method,
		url: url,
		data: data,
		success: onSuccess,
		dataType: "json"
	}).fail(function(data, error){
		onError(data.responseJSON.message, data.responseJSON.error);
	});
}
function defaultOnSuccess(data, response){
	console.log(data);
}
function defaultOnError(data, error){
	console.log(data);
	console.log(error);
}
