var heading = document.getElementById('h1');

heading.addEventListener('click', function(event) {
  var newParagraph = document.createElement('p');
  newParagraph.innerHTML = 'This is click number' + ' ' + event.detail;
  document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
