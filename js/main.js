var heading = document.getElementById('h1');
var newParagraph = document.createElement('p');
var clickNumber = 1;

heading.addEventListener('click', function() {
  newParagraph.innerHTML = 'This is click number' + ' ' + clickNumber++;
  document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
