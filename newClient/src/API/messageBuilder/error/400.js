import fieldNames from '../../../defaults/strings/fieldNames';

export default function(errorData, messageTemplates, langCode){
	var fields = Object.keys(errorData);
	var messages = [];

	fields.forEach((currentField)=>{
		var commenters = errorData[currentField];
		commenters.forEach((commenter)=>{
			var commenterType = commenter.type;
			switch (commenterType) {
				case 'required':
					var newlyBuiltMessage = handleRequired(commenter, messageTemplates, langCode);
					messages.push(newlyBuiltMessage);
					break;
				case 'email':
					var newlyBuiltMessage = handleEmail(commenter, messageTemplates, langCode);
					messages.push(newlyBuiltMessage);
					break;
				default:

			}
		})
	});
	return messages;
}

function handleRequired(commenter, messageTemplates, langCode){
	var template = messageTemplates.error_requiredField;

	var fieldName = commenter.attribute;
	if(fieldNames[fieldName] != null){
		fieldName = fieldNames[fieldName][langCode];
	}

	var template_localized = template[langCode];
	if(template_localized != null){
		return template_localized.replace(":attribute", fieldName);
	}
}

function handleEmail(commenter, messageTemplates, langCode){
	var template = messageTemplates.error_emailInvalid;

	var fieldName = commenter.attribute;
	if(fieldNames[fieldName] != null){
		fieldName = fieldNames[fieldName][langCode];
	}

	var template_localized = template[langCode];
	if(template_localized != null){
		return template_localized.replace(":attribute", fieldName);
	}
}
