import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Podcast from './model/podcasts';
import '../css/style.scss';
import '../css/upload.scss';
import '../css/artikler.scss';
import '../css/artikel.scss';
import '../css/animate.css';
import '../css/queries.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

// Base selecting
const latestPodcast = document.querySelector('.latest-podcasts');
const latestArticles = document.querySelector('.latest-articles');
const articleElement = $('.article')
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
};
const articles = () =>{
    for(let i=0; i<6; i++){
        createArticle(latestArticles, i);
    }
}

const createArticle = (parent, i) =>{
    const article = `
    <div class="article">
        <h1>Headline</h1>
    </div>`
    parent.insertAdjacentHTML('beforeEnd', article);
    
    articleElement.on('click', (e) =>{
        e.stopPropagation();
        e.stopImmediatePropagation();
        const articleClass = e.target.closest('div').className;
        document.location.hash = `#${articleClass}`

    });


}

const createPlayer = (parent, i) => {
    const player = `
    <div class="podcast-episode first">
        <div class="top-part" style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${state.podcast.results[i].picture}') no-repeat center center;">
            <h1>${state.podcast.results[i].title}</h1>
        </div>
        <div class="bottom-part">
            <button class="play-button hvr-radial-out"><i class="fas fa-headphones"></i></button>
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


    $('.play-button').on('click', (e) => {
        //klik på nogle klasser gør at funktionen køres flere gange
        e.stopPropagation();
        e.stopImmediatePropagation();
        let targetElement = e.target.closest('button');
        const Icon = targetElement.querySelector('.fas');
        let text = targetElement.nextElementSibling;
        let player = text.nextElementSibling;

        if (!player.classList.contains('active')) {
            player.classList.add('active');
            Icon.classList.add('fa-times');
            Icon.classList.remove('fa-headphones');
            text.classList.add('hide')
        } else {
            player.classList.remove('active');
            Icon.classList.add('fa-headphones');
            Icon.classList.remove('fa-times');
            text.classList.remove('hide');
        }
    });
};

podcasts();
articles();

//fireworks on submit podcast
$("#submit").on('click',() => {
    const b = $('.body');
    b.prepend('<div class="before"></div>');
    b.append('<div class="after"></div>');

    setTimeout(()=>($('.before, .after').remove()), 5000)

});


