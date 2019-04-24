import Artikel from './model/artikler';
import '../css/style.scss';
import '../css/artikler.scss';
import '../css/artikel.scss'
import '../css/queries.css';
import * as reusable from "./reusable-code";

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

let state = {};

    const artikel = async () => {

        // tager hash og fjerner alt der ikke er tal som #
        let id = window.location.hash.replace(/\D/g,'');
        state.artikler = new Artikel();

        try{
            // 1) Get responce
            await state.artikler.getResults(id);
            console.log(state)

            if (window.location.hash) {
                $('#top').css('background-image', ` url('${state.artikler.results[0].picture}')`);
                $('#title').html(state.artikler.results[0].title);
                $('#subtitle').html(state.artikler.results[0].subtitle);
                $('#author').html('Udgivet af ' + state.artikler.results[0].author);
                $('#date').html('Udgivet den ' + state.artikler.results[0].date);
                $('#body').html(state.artikler.results[0].body);
            } else {
                loadArtikler()
            }

        }catch(err){
            $('#top').css('background-image', 'url("../img/404.png")');
            console.log('Something went wrong, try again later')
        }
    };
    artikel();

const loadArtikler = () => {
    for(let i=0; i < state.artikler.results.length; i++){
        $("#artikler").append(`
        <div class="artikel animated fadeIn" data-id="${state.artikler.results[i].id}">
           <div style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${state.artikler.results[i].picture}') no-repeat center center;">
               <h1>${state.artikler.results[i].title}</h1>
               <h3>${state.artikler.results[i].subtitle}</h3>
               <h4>Læs denne artikel <i class="fas fa-arrow-right"> </i></h4>
           </div>
       </div>
        `)
    }

    $('.artikel').click((e) => {
        const targetArtikel = e.currentTarget.dataset.id;
        window.location.href = `artikel.html#${targetArtikel}`;
    });
};

