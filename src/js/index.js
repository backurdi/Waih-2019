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

// Base selecting
const latestPodcast = document.querySelector('.latest');
const button = $('.play-button');


console.log('Js is connected');
const state = {};

const podcasts = async () => {
    state.podcast = new Podcast();

    try{
        // 1) Get responce
        await state.podcast.getResults();
        console.log(state.podcast.results);

        for(let i=0; i<6; i++){
            createPlayer(latestPodcast, i);
        }
    }catch(err){
        console.log('Something went wrong with the search, try again later')
    }
        
}

podcasts();


button.click((event) => {
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

const createPlayer = (parent, i) => {
    const player = `
    <div class="podcast-episode first">
        <div class="top-part" style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${state.podcast.results[i].picture}') no-repeat center center;">
            <h1>${state.podcast.results[i].title}</h1>
        </div>
        <div>
            <button class="play-button"><i class="fas fa-headphones"></i></button>
            <p class="player-text">${state.podcast.results[i].description}</p>
            <div class="player-placeholder">
                <audio class="player" controls>
                    <source src="${state.podcast.results[i].audioPath}" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    </div>
    `;
    parent.insertAdjacentHTML('beforeEnd', player);
    Plyr.setup('.player');
};

