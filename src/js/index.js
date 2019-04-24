import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Seneste from './model/seneste';
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
let loadPodcasts = true;

const seneste = async () => {
    state.seneste = new Seneste();

    try {
        // 1) Get responce
        await state.seneste.getResults();
        console.log(state.seneste.results)

        for (let artikel of state.seneste.results.articles) {
            const article = `
                <div class="artikel animated fadeInRight" data-id="${artikel.id}">
                   <div style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${artikel.picture}') no-repeat center center;">
                       <h1>${artikel.title}</h1>
                       <h4>Læs denne artikel <i class="fas fa-arrow-right"> </i></h4>
                   </div>
               </div>
                `;
            latestArticles.insertAdjacentHTML('beforeEnd', article);
            $('.artikel').click((e) => {
                let targetArtikel = e.currentTarget.dataset.id;
                window.location.href = 'artikel.html#' + targetArtikel;
            });
        }

        window.onscroll = () => {
            let scrollY = window.scrollY;
            let podcastSection = document.querySelector('.latest-articles').offsetHeight - 80;
            if (scrollY > podcastSection)
                if (loadPodcasts) {
                    loadPodcasts = false;
                    createPlayer();
                    Plyr.setup('.player');
                }
        }



    } catch (err) {
        console.log('Something went wrong with loading the latest news, try again later\n'+err)
    }
};
seneste()

const createPlayer = () => {
    for (let podcast of state.seneste.results.podcasts){

        const player = `
        <div class="podcast-episode animated fadeInLeft">
            <div class="top-part">
                <h1>${podcast.title}</h1>
            </div>
            <div class="bottom-part">
                <button class="play-button hvr-radial-out"><i class="fas fa-headphones"></i></button>
                <p class="player-text">${podcast.description}</p>
                <div class="player-placeholder">
                    <audio class="player" controls>
                        <source src="${podcast.audioPath}" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
        `;
        latestPodcast.insertAdjacentHTML('beforeEnd', player);

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
    }
};
