import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Podcast from './model/podcasts';
import '../css/style.scss';
import '../css/upload.scss';
import '../css/animate.css';
import '../css/queries.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

console.log('Js is connected');
const state = {};

const podcasts = async () => {
        state.podcast = new Podcast();

        try{
            // 4) Search for recepies
            await state.podcast.getResults();
        }catch(err){
            alert('Something went wrong with the search, try again later')
        }
        
    }

    podcasts();

const button = $('.play-button');

button.click( (event) => {
    let targetElement = event.target.closest('button');
    const Icon = targetElement.querySelector('.fas');
    let text = targetElement.nextElementSibling;
    let placeholder = text.nextElementSibling;
    
    if (text.style.display == 'none') {
        text.style.display = "block";
        placeholder.innerHTML = "";
        Icon.classList.add('fa-headphones');
        Icon.classList.remove('fa-times');
    } else {
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

