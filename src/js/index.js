import Plyr from 'plyr';
import * as reusable from './reusable-code';
import '../css/style.scss';
import '../css/animate.css';
import '../css/queries.css';

console.log('Js is connected');

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

const button = $('.play-button');

button.click( (event) => {
    let targetElement = event.target.closest('button');
    const Icon = targetElement.querySelector('.fas');
    let text = targetElement.nextElementSibling;
    let placeholder = text.nextElementSibling;
    
    if (text.style.display == 'none') {
        console.log('block');
        text.style.display = "block";
        placeholder.innerHTML = "";
        Icon.classList.add('fa-headphones');
        Icon.classList.remove('fa-times');
    } else {
        console.log('none');
        text.style.display = 'none';
        createPlayer(placeholder);
        Icon.classList.add('fa-times');
        Icon.classList.remove('fa-headphones');
    }
});

const createPlayer = parent => {
    const playerBar = `
        <audio class="player" controls>
            <source src="http://www.noiseaddicts.com/samples_1w72b820/2543.mp3" type="audio/mpeg" />
        </audio>
    `;
    parent.insertAdjacentHTML('beforeEnd', playerBar);
    Plyr.setup('.player');
};