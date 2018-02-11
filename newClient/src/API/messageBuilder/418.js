export default function handle418Error(message, langCode){
	var messageBody = JSON.parse(message);
	var additionalData = messageBody.additionalData;
	var additionalDataKeys = [];
	if(additionalData != null){
		additionalDataKeys = Object.keys(additionalData)
	}

	var toReturn = [];
	var messageList = messageBody.list;
	messageList.forEach((currentMessage)=>{
		var selectedMessageTemplate = null;
		if(currentMessage.hasOwnProperty(langCode)){
			selectedMessageTemplate = currentMessage[langCode];
		} else if(currentMessage.hasOwnProperty("English")){
			selectedMessageTemplate = currentMessage.English;
		} else {
			var currentMessageLanguages = Object.keys(currentMessage);
			if(currentMessageLanguages.length > 0){
				selectedMessageTemplate = currentMessage[currentMessageLanguages[0]];
			}
		}
		if(selectedMessageTemplate != null){
			additionalDataKeys.forEach((dataKey)=>{
				selectedMessageTemplate = selectedMessageTemplate.replace(":"+dataKey,additionalData[dataKey]);
			});
			toReturn.push(selectedMessageTemplate);
		}
	});
	return toReturn;
}
