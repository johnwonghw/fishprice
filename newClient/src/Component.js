import React, { Component } from 'react';
import { setData } from './actions';
import { fallbackValue } from './Tools';
import handleMessage from './API/messageBuilder';

class ComponentClass extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}
	setData = (fieldName, val)=>{
		this.props.dispatch(setData(fieldName,val));
	}
	getData = (fieldName)=>{
		return fallbackValue(null, this, "props", "data", fieldName);
	}
	saveData = (name, data)=>{
		localStorage[name] = JSON.stringify(data);
	}
	retrieveData = (name)=>{
		var retrievedData = localStorage[name];
		if(retrievedData != null){
			return JSON.parse(retrievedData);
		} else {
			return null;
		}
	}
	handleApiErrorMessage = (errorMessages, errorCode)=>{
		var langCode = fallbackValue("English", this, "props", "data", "language", "active", "label");
		return handleMessage({
			message:errorMessages,
			error:errorCode
		}, langCode);
	}

	getNameButtonDisplayText = () => {
		if(!this.isSessionValid()){
			return null;
		}
		var userInfo = this.getData("userInfo");
		if(userInfo == null){
			return null;
		}
		var id = fallbackValue(null, userInfo, "_id");
		if(id == null || id != fallbackValue(null, this.getData("session"), "_id")){
			return null;
		}

		return fallbackValue(null, userInfo, "name", "first");
	}
	isSessionValid = () => {
		var expireUTC = fallbackValue(null, this.getData("session"), "tokenExpireUTC");
		if(expireUTC == null){
			return false;
		}
		var currentDate = new Date();
		var expireDate = new Date(expireUTC);

		if(expireDate < currentDate){
			return false;
		}
		return true;
	}
}
export const mapStateToProps = (state, ownProps) => {
	return {
		data:state.data
	}
}
export default ComponentClass;
