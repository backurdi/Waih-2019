import Plyr from 'plyr';
import * as reusable from './reusable-code';
import Podcast from './model/programs';
import '../css/programs.scss';
import '../css/animate.css';
import '../css/queries.css';

// Implementing reusable HTML code
reusable.nav('.nav', './reusable/nav.html');
reusable.head('.head', './reusable/head.html');
console.log('programs work');

const programs = document.querySelector('.programs-container');


const createPrograms = (parent, i) =>{
    const program = `
    <div class="program">
        <div class="programs-img-wrapper"></div>
        <div class="programs-title-container">
          <h3>Test program</h3>
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
const testVar = 6;
for (var i = 0; i<testVar; i++){
    createPrograms(programs, i);
}



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