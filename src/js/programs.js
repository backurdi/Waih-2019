import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Program from './model/programs';
import '../css/programs.scss';
import '../css/animate.css';
import '../css/queries.css';

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
            loadProgram()
        } else {
            print("false")
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

history.pushState(state, 'programs', window.location.href);
programs();
Plyr.setup('.player');

const createPrograms = (i) => {
    const program = `
    <div class="program" data-id="${state.program.results[i].id}">
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
        document.location.replace(`program.html#${articleClass}`)
    });
}

const loadProgram = () => {

    $('#title').html(state.program.results[0].title);
    $('.img-wrapper').css("background-image", ` url('${state.program.results[0].picture}')`);
    print(state.program.results[0])
}


const print = (t) => {console.log(t)}
