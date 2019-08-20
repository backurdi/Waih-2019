import Artikel from './model/artikler';
import * as reusable from "./reusable-code";
import '../css/artikler.scss';
import '../css/artikel.scss';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');
reusable.footer('.footer', './reusable/footer.html');

let state = {};

const artikel = async () => {

    // tager hash og fjerner alt der ikke er tal som #
    let id = window.location.hash.replace(/\D/g, '');
    state.artikler = new Artikel();

    try {
        // 1) Get responce
        await state.artikler.getResults(id);
        console.log(state)

        const text = state.artikler.results[0].body
        const res = text.replace(/%citat%/g, '<div class="quote"></div>');

        if (window.location.hash) {
            $('#top').attr('src', `${state.artikler.results[0].picture}`);
            $('#picture-text').html(state.artikler.results[0].pictureText);
            $('#type').html(state.artikler.results[0].type);
            $('#title').html(state.artikler.results[0].title);
            $('#subtitle').html(state.artikler.results[0].subtitle);
            $('#author').html(state.artikler.results[0].author);
            $('#date').html(state.artikler.results[0].date);
            $('#body').html(res);
            $('#type').html(state.artikler.results[0].type);
            $('.quote').html('<i class="fas fa-quote-left"></i>' + state.artikler.results[0].quote);
            $('#facebookShare').attr('href', `urlhttps://www.facebook.com/sharer.php?u=waih.dk/artikel.html#11`);

        } else {
            loadArtikler()
        }

    } catch (err) {
        $('#top').css('background-image', 'url("../img/404.png")');
        console.log('Something went wrong, try again later')
    }
};
artikel();

const loadArtikler = () => {
    for (let i = 0; i < state.artikler.results.length; i++) {
        if (i % 2 === 0) {
            $(".article-content").append(`
            <div class="artikel big-article" data-id="${state.artikler.results[i].id}">
                <div class="visual" style="background-image: url('${state.artikler.results[i].picture}');"></div>
                <div class="info">
                    <h1>${state.artikler.results[i].title}</h1>
                    <h2>${state.artikler.results[i].author} <span class="date">| ${state.artikler.results[i].date}</span></h2>

                    <p>${state.artikler.results[i].subtitle}</p>
                </div>
            </div>
            `)
        } else {
            $(".article-little-content").append(`
            <div class="artikel little-article" data-id="${state.artikler.results[i].id}"">
                <div class="visual" style="background-image: url('${state.artikler.results[i].picture}');"></div>
                <div class="info">
                    <h1>${state.artikler.results[i].title}</h1>
                    <h2>${state.artikler.results[i].author} <span class="date">| ${state.artikler.results[i].date}</span></h2>

                    <p>${state.artikler.results[i].subtitle}</p>
                </div>
            </div>
            `)
        }
    }

    $('.artikel').click((e) => {
        const targetArtikel = e.currentTarget.dataset.id;
        window.location.href = `artikel.html#${targetArtikel}`;
    });
};

$('#linkCopy').click(() => {
    const copyText = document.location.href;
    const copyInput = document.createElement('input');
    copyInput.value = copyText;
    document.querySelector('body').appendChild(copyInput)
    copyInput.select();
    document.execCommand("copy");
    document.querySelector('body').removeChild(copyInput)
});
