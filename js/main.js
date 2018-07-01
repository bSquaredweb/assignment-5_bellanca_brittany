
// listening for: mouse to enter; upon hearing: the background color will change
var paragraph1 = document.getElementsByTagName('p')[0];

paragraph1.addEventListener('mouseenter', function() {
    paragraph1.className = 'yellow';
});

paragraph1.addEventListener('mouseleave', function() {
    paragraph1.classList.remove('yellow');
});


// The next two are used together
// listening for: click; upon hearing: will not go to website
var pexelsLink = document.getElementsByTagName('a')[0];

pexelsLink.addEventListener('click', function(event) {
    event.preventDefault();
});

// listening for: double click; upon hearing: will add a new paragraph and link
pexelsLink.addEventListener('dblclick', function() {
    var ouch = document.createElement('p');
    ouch.innerHTML = '<p class="ouch">Ouch! Oh, hi! Sorry, I guess I was sleeping on the job! Here, try this link <a class="text--white" href="https://www.pexels.com/photo/pink-daisy-flower-lot-1038002/" target="_blank">Pexels.com</a>!</p>';
    var theSpot = document.getElementsByTagName('section')[1];
    var theRightSpot = theSpot.getElementsByTagName('p')[0].appendChild(ouch);
});
