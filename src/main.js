// Email Verification Code

$(document).ready(function() {
  console.log('sanity check');

  $('form').on('submit', function(event) {
    event.preventDefault()

    email = $('#email-verify').val();
    console.log(email);

    if (email.indexOf('@') < 0) {
      console.log(email);
      var message = 'Make sure to include a "@"!'
      $('.valid-callout > h2').text(message)
      $('.valid-callout').css('visibility', 'visible')
      setTimeout(hideCallout, 2000)
    } else if (email.indexOf('@') <= 0) {

    } else if (email.indexOf('@') + 1 === email.lastIndexOf('.')) {
      var message = 'Please Input Something before the "." and after the "@"'
      $('.valid-callout > h2').text(message);
      $('.valid-callout').css('visibility', 'visible')
      setTimeout(hideCallout, 2000)
    }

    function shake() {
      $('#email-verify').animate({
        "margin-left": "15px"
      }, 50)
      $('#email-verify').animate({
        "margin-left": "-15px"
      }, 50)
      $('#email-verify').animate({
        "margin-left": "0px"
      }, 15)
      $('#email-verify').animate({
        "border-color": "red"
      }, 500)
    }
    shake()

  })

})

function hideCallout() {
  $('.valid-callout').css('visibility', 'hidden')
}

// CHECKOUT VALIDATION

$(document).ready(function() {
  console.log('Give me your money!');

    $('form').validate({

      //Validation rules

      rules: {
        firstName: {
          required: true,
          minlength: 2,
          firstletter: true
        },
        lastName: {
          required: true,
          minlength: 3,
          firstletter: true
        },
        userCompany: {
          required: false,
          minlength: 2,
          firstletter: true
        },
        addressFirst: {
          required: true
        },
        stateSelect: {
          required: true
        },
        zipCode: {
          required: true,
          zipcodeUS: true
        },
        billingFirst: {
          required: true,
          minlength: 2,
          firstletter: true
        },
        billingLast: {
          required: true,
          minlength: 3,
          firstletter: true
        },
        billingCo: {
          required: false,
          minlength: 2,
          firstletter: true
        },
        billAddressOne: {
          required: true
        },
        billingState: {
          required: true
        },
        billingZip: {
          required: true,
          zipcodeUS: true
        },
        creditCard: {
          required: true,
          creditcard: true
        },
        cardExpire: {
          date: true
        },
        verifyCode: {
          required: true,
          minlength: 3,
          maxlength: 3
        },
      },

      //Validation error messages

      messages: {
        firstName: {
          required: 'First Name field cannot be blank',
          minlength: 'First Name must be at least two characters',
          firstletter: 'First letter must be capitalized'
        },
        lastName: {
          required: 'Last Name field cannot be blank!',
          minlength: 'Last Name must be at least three characters',
          firstletter: 'First letter must be capitalized'
        },
        userCompany: {
          minlength: 'Must be at least two characters',
          firstletter: 'First letter must capitalized'
        },
        addressFirst: {
          required: 'Please enter your shipping address'
        },
        billAddressOne: {
          required: 'Please enter your shipping address'
        },
        cardExpire: {
          required: 'Please enter you expiration date'
        },
        verifyCode: {
          required: 'Must enter CCV number',
          minlength: 'Must be three numbers',
          maxlength: 'Must be three numbers',
        }
      },

      submitHandler: function(form) {
        form.submit();
      }
    });

    // Adds the method to check the first letter is capitalized

    $.validator.addMethod('firstletter', function(value, element) {
      return this.optional(element) || /^[A-Z]/.test(value);
    }, 'First letter must be capitalized');

    // Checks valid US zip code format

    $.validator.addMethod("zipcodeUS", function(value, element) {
      return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
    }, 'Please enter a valid US Zip Code');

    // Checks if credit card is valid

    $.validator.addMethod("creditcard", function(value, element) {
      if (this.optional(element)) {
        return "dependency-mismatch";
      }

      // Accept only spaces, digits and dashes
      if (/[^0-9 \-]+/.test(value)) {
        return false;
      }

      var nCheck = 0,
        nDigit = 0,
        bEven = false,
        n, cDigit;

      value = value.replace(/\D/g, "");

      // Basing min and max length on

      if (value.length < 13 || value.length > 19) {
        return false;
      }

      for (n = value.length - 1; n >= 0; n--) {
        cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
          if ((nDigit *= 2) > 9) {
            nDigit -= 9;
          }
        }

        nCheck += nDigit;
        bEven = !bEven;
      }

      return (nCheck % 10) === 0;
    }, 'Please enter a valid credit card number.');
});
