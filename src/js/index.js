import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Podcast from './model/podcast';
import Artikel from './model/artikler';
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
const state = {};


const podcasts = async () => {
    state.podcast = new Podcast();

    try {
        // 1) Get responce
        await state.podcast.getResults();

        for (let i = 0; i < 6; i++) {
            createPlayer(i);
        }


    } catch (err) {
        console.log('Something went wrong with the search, try again later\n'+err)
    }
};

const artikler = async () => {
    state.artikler = new Artikel();

    try {
        // 1) Get responce
        await state.artikler.getResults();

        for (let i = 0; i < 3; i++) {
            const article = `
                <div class="artikel animated fadeInRight" data-id="${state.artikler.results[i].id}" style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${state.artikler.results[i].picture}') no-repeat center center;">
                   <div>
                       <h1>${state.artikler.results[i].title}</h1>
                       <h4>Læs denne artikel <i class="fas fa-arrow-right"> </i></h4>
                   </div>
               </div>
                `;
            latestArticles.insertAdjacentHTML('beforeEnd', article);
            $('.artikel').click((e) => {
                let targetArtikel = e.currentTarget.dataset.id;
                window.location.replace('artikel.html#' + targetArtikel);
            });
        }

    } catch (err) {
        console.log('Something went wrong with the search, try again later\n' +err)
    }
};

const createPlayer = (i) => {
    const player = `
    <div class="podcast-episode first animated fadeInLeft">
        <div class="top-part">
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
    latestPodcast.insertAdjacentHTML('beforeEnd', player);
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

window.onscroll = () => {
    let scrollY = window.scrollY;
    let podcastSection = document.querySelector('.latest-articles').offsetHeight - 50;
    if(scrollY > podcastSection)
        if (!document.querySelector('.latest-podcasts').firstChild){
            podcasts();
        }
}

artikler();
history.pushState(state, 'index', window.location.href);
