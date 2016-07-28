$(document).ready(function () {
  console.log('sanity check');

    $('form').on('submit', function (event) {
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
      function shake () {
        $('#email-verify').animate({
          "margin-left" : "15px"
        },50)
        $('#email-verify').animate({
          "margin-left" : "-15px"
        },50)
        $('#email-verify').animate({
          "margin-left" : "0px"
        },15)
        $('#email-verify').animate({
          "border-color" : "red"
        },500)
      }
      shake()

    })

})

function hideCallout () {
    $('.valid-callout').css('visibility', 'hidden')
  }
