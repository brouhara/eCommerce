
// <div class="form-group col-md-4">
//      <label for="firstName">First Name</label>
//      <input type="text" class="form-control" id="firstName" name="firstName">
// </div>

var States = ['Alaska', 'Colorado', 'Delaware', 'Iowa', 'Nebraska'];

function Field(type, name, text, span) {
	this.type = type;
	this.name = name;
	this.text = text;
	this.span = span;
}

var Shipping = [

	[
		{ firstName: ['input', 'First Name', 'col-md-4'] },
		{ lastName: ['input', 'Last Name', 'col-md-4'] },
		{ company: ['input', 'Company Name', 'col-md-4'] },
	],

	[
		{ address1: ['input', 'Address Line 1', 'col-md-6'] },
		{ address2: ['input', 'Address Line 2', 'col-md-6'] },
	],

	[
		{ city: ['input', 'City', 'col-md-4'] },
		{ state: ['select', 'State', 'col-md-4']},
		{ zip: ['input', 'Zip Code', 'col-md-4']}
	]
]


function buildForm() {
	var $Shipping = $('div.row#shipping');

	for( rowNum in Shipping) {
		var $row = buildRow( $Shipping, Shipping[rowNum]);
		$form.append($row);
	}

	return $form;
}

function buildRow ($parent, row) {
	var $row = createRow();
	var fields = Object.keys(row);

	fields.forEach(function(fieldNum) {
		var $field = row[fieldNum];
		$parent.append($parent, $field);
	});
}

function buildField ( $parent, item ) {
	
	var $field = formInput(textField(newField));

}

function createRow() {
	var $row = $(document.createElement('div'))
		.addClass('row');
	return $row;
}

function optionField({fieldName, fieldOptions, fieldSpan}) {
	var field = {
		classes: 'form-control',
		id: fieldName,
		name: fieldName,
		options: fieldOptions,
		span: fieldSpan
	}

	return field;
}

function textField({fieldName, fieldText, fieldSpan}) {
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

function formInput({ classes, id, name, span, text, type }) {
	var $div = fieldDiv(span);

	var $label = fieldLabel(name, text);
	var $input = fieldInput(type, classes, span, id, name);

	$div.append($label);
	$label.append($input);

	return $div;
}

function fieldDiv(fieldSpan) {
	var $div = $(document.createElement('div'))
		.addClass('form-group ' + fieldSpan);
	return $div;
}

function fieldLabel(fieldName, labelText) {

	var $label = $(document.createElement('label'));

	$label.text(labelText);

	return $label;
}

function fieldInput(fieldType, fieldClass, fieldSpan, fieldId, fieldName) {
	var $input = $(document.createElement('input'))
		.addClass(fieldClass + ' ' + fieldSpan)
		.attr("type", fieldType)
		.attr("id", fieldId)
		.attr("name", fieldName);

	return $input;
}

function fieldOption(fieldClass, fieldSpan, fieldId, fieldName, fieldOptions) {
	var $select = $(document.createElement('select'))
		.addClass(fieldClass + ' ' + fieldSpan)
		.attr("id", fieldId)
		.attr("name", fieldName);

	for (option in fieldOptions) {
		var $option = $(document.createElement('option'))
			.text(option);
		$select.append($option);
	}

	return $select;
}

var $form = buildForm();

