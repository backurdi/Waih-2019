import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Program from './model/programs';
import '../css/programs.scss';
import '../css/animate.css';
import '../css/queries.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');
console.log('programs work');
let state = {};

const programsContainer = document.querySelector('.programs-container');

const programs = async () => {
    state.program = new Program();

    try{
        await state.program.getResults();
        console.log(state.program.results);
        for (var i = 0; i<state.program.results.length; i++){
            createPrograms(programsContainer, i);
        }
    }catch(err){
        console.log('Something went wrong with the search, try again later')
    }        
};

const createPrograms = (parent, i) =>{
    const program = `
    <div class="program">
        <div class="img-wrapper" style="background-image: url('${state.program.results[i].picture}');"></div>
        <div class="programs-title-container" style="background-color: ${state.program.results[i].colorCode} ">
          <h3>${state.program.results[i].title}</h3>
        </div>
      </div>
    `

    parent.insertAdjacentHTML('beforeEnd', program);
    const programElement = document.querySelector('.program');
    programElement.addEventListener('click', (e) =>{
        e.stopPropagation();
        e.stopImmediatePropagation();
        const articleClass = e.target.closest('div').className;
        document.location.hash = `#${articleClass}`

    });
}

programs();

//artikler
// const loadArtikler = () => {
//     if(latestArticles){
//         for(let i=0; i < 6; i++){
//             createArticle(latestArticles, i);
//         }
//     } else {
//         for(let i=0; i < state.artikler.results.length; i++){
//             articles(i);
//         }
//     }
//     $('.artikel').click((e) => {
//         let targetArtikel = e.currentTarget.dataset.id;
//         window.location.replace('artikel.html#' + targetArtikel);
//     });
// };

// $(document).ready(() => {
//     if (window.location.hash) {
//         const artikel = async () => {
//             let id = window.location.hash.replace(/\D/g,'');
//             state.artikel = new Artikel();

//             try{
//                 // 1) Get responce
//                 await state.artikel.getResults(id);
//                     console.log(state.artikel.results[0])
//                     $('#title').html(state.artikel.results[0].title);
//                     $('#subtitle').html(state.artikel.results[0].subtitle);
//                     $('#author').html(state.artikel.results[0].author);
//                     $('#date').html('Udgivet den ' +state.artikel.results[0].date);
//                     $('#body').html(state.artikel.results[0].body);

//             }catch(err){
//                 console.log('Something went wrong, try again later')
//             }
//         };
//         artikel();
//     }

// });

// const articles = (i)=>{
//         $("#artikler").append(`
//         <div class="artikel" data-id="${state.artikler.results[i].id}">
//            <div style="background: linear-gradient(rgba(40, 57, 80, 0.67), rgba(40, 57, 80, 0.67)), url('${state.artikler.results[i].picture}') no-repeat center center;">
//                <h1>${state.artikler.results[i].title}</h1>
//            </div>
//            <h3>${state.artikler.results[i].subtitle}</h3>
//        </div>
//         `)
// }