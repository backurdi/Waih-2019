import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Seneste from './model/seneste';
import '../css/style.scss';
import '../css/animate.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

// Base selecting
const latestPodcast = document.querySelector('.latest-podcasts');
const state = {};

const seneste = async () => {
    state.seneste = new Seneste();

    try {
        // 1) Get responce
        await state.seneste.getResults();
        console.log(state.seneste.results);
        let storArtikel = state.seneste.results.articles[0];
        let lilleArtikel1 = state.seneste.results.articles[1];
        let lilleArtikel2 = state.seneste.results.articles[2];

        $('.article-content').attr('data-id', storArtikel.id);
        $('.article-content h1').html(storArtikel.title);
        $('.article-content .visual').attr('style', `background-image: url("${storArtikel.picture}");`);
        $('.article-content .info h2').html(storArtikel.author + `<span class="date"> | ${storArtikel.date}</span>`)
        $('.article-content .info p').html(storArtikel.subtitle );

        $('.article-top').attr('data-id', lilleArtikel1.id);
        $('.article-top h1').html(lilleArtikel1.title);
        $('.article-top .visual').attr('style', `background-image: url("${lilleArtikel1.picture}"); background-repeat: no-repeat; background-size: cover;`);
        $('.article-top .info h2').html(lilleArtikel1.author + `<span class="date"> | ${lilleArtikel1.date}</span>`);
        $('.article-top .info p').html(lilleArtikel1.subtitle );

        $('.article-bottom').attr('data-id', lilleArtikel2.id);
        $('.article-bottom h1').html(lilleArtikel2.title);
        $('.article-bottom .visual').attr('style', `background-image: url("${lilleArtikel2.picture}"); background-repeat: no-repeat; background-size: cover;`);
        $('.article-bottom .info h2').html(lilleArtikel2.author + `<span class="date"> | ${lilleArtikel2.date}</span>`);
        $('.article-bottom .info p').html(lilleArtikel2.subtitle );

            $('.artikel').click((e) => {
                let targetArtikel = e.currentTarget.dataset.id;
                console.log(e.currentTarget.dataset)
                window.location.href = 'artikel.html#' + targetArtikel;
            });
        createPlayer();
        Plyr.setup('.player');

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
