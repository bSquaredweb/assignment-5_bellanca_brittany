var submission = document.getElementById('myForm');

submission.addEventListener('submit', function(submitting) {
  submitting.preventDefault();

  var firstName = document.getElementById('firstName').value;
  console.log('The firstName is:' + ' ' + firstName);

  var lastName = document.getElementById('lastName').value;
  console.log('The lastName is:' + ' ' + lastName);

  var email = document.getElementById('emailAddress').value;
  console.log('The email is:' + ' ' + email);

  var message = document.getElementById('message').value;
  console.log('The message is:' + ' ' + message);

});
