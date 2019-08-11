import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Seneste from './model/seneste';
import '../css/style.scss';
import '../css/animate.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');
reusable.footer('.footer', './reusable/footer.html');

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
        if (storArtikel.title.length > 65) {
            storArtikel.title = storArtikel.title.substring(0, 65) + " ...";
        }
        let lilleArtikel1 = state.seneste.results.articles[1];
        if (lilleArtikel1.title.length > 65) {
            lilleArtikel1.title = lilleArtikel1.title.substring(0, 65) + " ...";
        }
        let lilleArtikel2 = state.seneste.results.articles[2];
        if (lilleArtikel2.title.length > 40) {
            lilleArtikel2.title = lilleArtikel2.title.substring(0, 40) + " ...";
        }

        $('.article-content').attr('data-id', storArtikel.id);
        $('.article-content h1').html(storArtikel.title);
        $('.article-content .visual').attr('style', `background-image: url("${storArtikel.picture}");`);
        $('.article-content .info h2').html(storArtikel.author + `<span class="date"> | ${storArtikel.date}</span>`)
        $('.article-content .info p').html(storArtikel.subtitle);

        $('.article-top').attr('data-id', lilleArtikel1.id);
        $('.article-top h1').html(lilleArtikel1.title);
        $('.article-top .visual').attr('style', `background-image: url("${lilleArtikel1.picture}"); background-repeat: no-repeat; background-size: cover;`);
        $('.article-top .info h2').html(lilleArtikel1.author);
        $('.article-top .info p').html(lilleArtikel1.subtitle);

        $('.article-bottom').attr('data-id', lilleArtikel2.id);
        $('.article-bottom h1').html(lilleArtikel2.title);
        $('.article-bottom .visual').attr('style', `background-image: url("${lilleArtikel2.picture}"); background-repeat: no-repeat; background-size: cover;`);
        $('.article-bottom .info h2').html(lilleArtikel2.author);
        $('.article-bottom .info p').html(lilleArtikel2.subtitle);

        $('.artikel').click((e) => {
            let targetArtikel = e.currentTarget.dataset.id;
            console.log(e.currentTarget.dataset)
            window.location.href = 'artikel.html#' + targetArtikel;
        });

        createPlayer();
        Plyr.setup('.player');

    } catch (err) {
        console.log('Something went wrong with loading the latest news, try again later\n' + err)
    }
};
seneste()

const createPlayer = () => {
    for (let podcast of state.seneste.results.podcasts) {
        if (podcast.hostname.length > 20) {
            podcast.hostname = podcast.hostname.substring(0, 30) + " ...";
        }
        if (podcast.guestname.length > 70) {
            console.log(podcast.guestname);
            podcast.guestname = podcast.guestname.substring(0, 20) + " ...";
        }

        const player = `
        <div class="podcast-episode animated fadeInLeft">
            <div class="top-part">
                <h1>${podcast.title}</h1>
            </div>
            <div class="bottom-part">
                <button class="play-button hvr-radial-out"><i class="fas fa-headphones"></i></button>
                <div class="podcast-text">
                    <h3 class="player-text">Vært: ${podcast.hostname}</h3>
                    <h3 class="player-text">Gæst: ${podcast.guestname}</h3>
                </div>
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