
// <div class="form-group col-md-4">
//      <label for="firstName">First Name</label>
//      <input type="text" class="form-control" id="firstName" name="firstName">
// </div>


var Shipping = {
	firstName: { },
	lastName: { },
	company: { },
	address1: { },
	address2: { },
	city: { },
	state: { },
	zip: { }
}

function formAppend() {
	var $form = $('.row#shipping');

	var firstName = formInput(textField('firstName', 'firstName', 'First Name'));
	// var lastName = formInput( 'text', 'form-control', 'firstName', 'firstName', 'First Name');
	// var company = formInput( 'text', 'form-control', 'firstName', 'firstName', 'First Name');
	// var firstName = formInput( 'text', 'form-control', 'firstName', 'firstName', 'First Name');
	// var firstName = formInput( 'text', 'form-control', 'firstName', 'firstName', 'First Name');
	console.log(firstName);
	$form.append(firstName);
}

function textField ( fieldName, fieldText, fieldSpan ) {
	var field = {
		type: 'text',
		classes: 'form-control',
		id: fieldName,
		name: fieldName,
		text: fieldText,
		span: fieldSpan
	}

	return field;
}

function formInput( {type, classes, id, name, text, span} ) {
    var $div = fieldDiv( span );

    var $label = fieldLabel(name, text);
    var $input = fieldInput( type, classes, id, name);

    $div.append($label);
    $label.append($input);

    return $div;
}

function fieldDiv( fieldSpan ) {
	var $div = $( document.createElement('div') )
					.addClass('form-group ' + fieldSpan );
	return $div;
}

function fieldLabel( fieldName, labelText) {

	var $label = $( document.createElement('label') )
					
	$label.text(labelText);
	
    return $label;
}

function fieldInput(fieldType, fieldClass, fieldId, fieldName) {
	var $input = $(document.createElement('input'))
					.addClass(fieldClass)
					.attr( "type", fieldType)
					.attr( "id", fieldId)
					.attr( "name", fieldName);

    return $input;
}


formAppend();

