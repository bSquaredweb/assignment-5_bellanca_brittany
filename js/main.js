// The first two are used together

var button = document. getElementsByClassName('button')[0];
var article1 = document.getElementsByTagName('article')[0];

// listening for: click on "button"; upon hearing: the background color will be removed
button.addEventListener('click', function() {
    article1.classList.remove('yellow')
});

// listening for: mouseover on article; upon hearing: the background color will appear again
article1.addEventListener('mouseover', function() {
    article1.className = 'main__article yellow'
});


// The next two are used together

var pexelsLink = document.getElementsByTagName('a')[0];

// listening for: click; upon hearing: will not go to website
pexelsLink.addEventListener('click', function(event) {
    event.preventDefault();
});

// listening for: double click; upon hearing: will add a new paragraph and link
pexelsLink.addEventListener('dblclick', function() {
    var ouch = document.createElement('p');
    ouch.innerHTML = '<p class="ouch">Ouch! Oh, hi! Sorry, I guess I was sleeping on the job! Here, try this link <a class="text--white" href="https://www.pexels.com/photo/pink-daisy-flower-lot-1038002/" target="_blank">Pexels.com</a>!</p>';
    var theSpot = document.getElementsByTagName('article')[1];
    var theRightSpot = theSpot.getElementsByTagName('p')[0].appendChild(ouch);
});


// even though there are four Event Listeners, there are three that are unique, per requirements
