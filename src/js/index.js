import plyr from 'plyr';
import * as reusable from './reusable-code';
import '../css/style.scss';
import '../css/animate.css';
import '../css/queries.css';

console.log('Js is connected');

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

const text = $('.player-text');
const bar = $('.player-bar');
const button = $('.play-button');

button.click( (event) => {
    let id = event.target.closest('button').id;
    console.log(id);
    if (text.textDisplay == 'none') {
        console.log('block');
        text.css('display','block');
        bar.innerHTML = "";
    } else {
        console.log('none');
        text.css('display','none');
        createPlayer(bar);
    }
});

const createPlayer = parent => {
    const playerBar = `
    <audio class="player" controls>
        <source src="http://www.noiseaddicts.com/samples_1w72b820/2543.mp3" type="audio/mpeg" />
    </audio>
    `;

    
    parent.append(playerBar);
    const player = new plyr('.player');
};