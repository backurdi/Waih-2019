import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Program from './model/programs';
import Podcast from './model/podcast';
import '../css/programs.scss';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');

let state = {};
const programsContainer = document.querySelector('.programs-container');

const programs = async () => {
    state.program = new Program();
    let id = window.location.hash.replace(/\D/g,'');

    try{
        await state.program.getResults(id);
        console.log(state.program.results)

        if(window.location.hash) {
            loadProgram();
            loadPodcasts();
        } else {
            for (let i = 0; i<state.program.results.length; i++){
                createPrograms(i);
            }
        }

    }catch(err){
        $('#title').html('Siden du leder efter findes ikke');
        $('.img-wrapper').css("background-image", ` url(../img/404.png)`);
        console.log('Something went wrong with the search, try again later')
    }
};

programs();


const loadProgram = () => {
    $('#title').html(state.program.results[0].title);
    $('.img-wrapper').css("background-image", ` url('${state.program.results[0].picture}')`);
}

const loadPodcasts = async () => {
    state.podcast = new Podcast();

    try {
        // 1) Get responce
        await state.podcast.getResults(state.program.results[0].id);
        console.log(state.podcast.results)

        let i = 0;
        for (let podcast of state.podcast.results) {
            $(".podcasts").append(`
            <h1 class="podcast-title" data-id="${i++}">${podcast.title}
                <audio class="player" controls="">
                    <source src="${podcast.audioPath}" type="audio/mpeg">
                </audio>
            </h1>
            `);

            }
            $('.podcast-title').on('click', (e) => {
                let id = e.target.closest('h1').dataset.id;
                e.stopPropagation();
                e.stopImmediatePropagation();
                $(".description h4").html('Beskrivelse af ' +state.podcast.results[id].title);
                $(".description p").html(state.podcast.results[id].description)
            })
        Plyr.setup('.player');


    } catch (err) {
        console.log('Something went wrong with the search, try again later1')
    }
};


const createPrograms = (i) => {
    const program = `
    <div class="program animated fadeIn" data-id="${state.program.results[i].id}">
        <div class="img-wrapper" style="background-image: url('${state.program.results[i].picture}');"></div>
        <div class="programs-title-container" style="background-color: ${state.program.results[i].colorCode} ">
          <h3>${state.program.results[i].title}</h3>
        </div>
    </div>
    `

    programsContainer.insertAdjacentHTML('beforeEnd', program);
    const programElement = $('.program');
    programElement.click((e) =>{
        const articleClass = e.target.closest('.program').dataset.id;
        document.location.href = `program.html#${articleClass}`;
    });
};

