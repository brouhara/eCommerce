// Email Verification Code

$(document).ready(function() {
  console.log('sanity check');

  $('form').on('submit', function(event) {
    event.preventDefault()

    email = $('#email-verify').val();
    console.log(email);

    var validSubDomain = email.indexOf('@') + 2 >= email.indexOf('.')
    var topLevelDomain = email.slice(email.lastIndexOf('.')).length > 1
    var includeAtSymbol = email.indexOf('@') < 0
    var validDomain = email.indexOf('@') + 1 === email.lastIndexOf('.')
    var invalidChars = ['/', '-', '!', '&', '#', '(', ')']
    var hasInvalidChars = invalidChars.some(function(each) {
      return email.indexOf(each) !== -1
    })

    function addClassToEmail(className) {
      $('#email-verify').removeClass('validEmail errorInput').addClass(className);
    }
    // addClassToEmail('errorInput')

    function validateEmail() {
      if (hasInvalidChars) {
        // 'Has invalid Characters!'
        addClassToEmail('errorInput')
        shake()
      } else if (!topLevelDomain) {
        // 'Make sure to include a top level domain!'
        addClassToEmail('errorInput')
        shake()
      } else if (includeAtSymbol) {
        // 'Make sure to include a "@"!'
        addClassToEmail('errorInput')
        shake()
      } else if (validSubDomain) {
        // 'Please Input a "." after the @'
        addClassToEmail('errorInput')
        shake()
      } else if (validDomain) {
        // 'Please Input Something before the "." and after the "@"'
        addClassToEmail('errorInput')
        shake()
      } else {
        addClassToEmail('validEmail')
      }
    }
    validateEmail()

    function shake() {
      $('#email-verify').animate({
        "margin-left": "15px"
      }, 100)
      $('#email-verify').animate({
        "margin-left": "-15px"
      }, 100)
      $('#email-verify').animate({
        "margin-left": "0px"
      }, 100)
    }
  })
})

function hideCallout() {
  $('.valid-callout').css('visibility', 'hidden')
}
