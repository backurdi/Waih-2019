import * as reusable from './reusable-code';
import '../css/dashboard.scss';
import '../css/animate.css';
import Podcast from "./model/podcast";
import Program from "./model/programs";
import Artikel from './model/artikler';
import { async } from 'q';

reusable.head('.head', './reusable/head.html');
reusable.dbnav('.nav', './reusable/dbnav.html');

let state = {};
const tbody = document.querySelector('tbody');

const deletePodcast = async (id, index) => {
    state.podcast = new Podcast();
    try {
        await state.podcast.delete(id);

        tbody.deleteRow(index);

    }catch (err) {
        alert('fejl:', err)
    }
};

const updatePodcast = async  (id, param, newValue, target, oldVal) => {
    try {
        await state.podcast.update(id, param, newValue)
    } catch (err) {
        alert(`Fejl: ${param} kunne ikke opdateres pga følgende:\n${err}`)
        target.innerText = oldVal;
    }
}

const loadPodcasts = async (id) => {
    state.podcast = new Podcast();
    try {
        // 1) Get responce
        await state.podcast.get(id);
        console.log(state.podcast.results);

        for (let podcast of state.podcast.results) {

            let podRow =
                `<tr class="animated fadeIn" data-id="${podcast.id}">
                    <td data-param="title" contenteditable>${podcast.title}</td>   
                    <td data-param="hostname" contenteditable>${podcast.hostname}</td>     
                    <td data-param="guestname" contenteditable>${podcast.guestname}</td>
                    <td data-param="description" contenteditable>${podcast.description}</td>    
                    <td style="padding: 0"><input data-id="${podcast.id}" type="button" class="slet" value="Slet"></td>    
                    <td class="gem" style="padding: 0"><input data-id="${podcast.id}" type="button" value="Gem"></td>    
                 </tr>`;
            tbody.insertAdjacentHTML('beforeEnd', podRow);
        }
        let title, podId, index, param, oldValue, newValue;

        $('.slet').on('click', (e) => {
            title = e.currentTarget.parentNode.parentNode.firstElementChild.innerHTML;
            podId = e.currentTarget.dataset.id;
            index = e.currentTarget.parentNode.parentNode.rowIndex;
            if(confirm('Er du sikker på at du vil slette podcasten med titlen: \n"'+ title + '" ?')) {
                deletePodcast(podId, index);
            }
        });
        $('td').on('focus', (e) => {
            podId = e.currentTarget.parentNode.dataset.id;
            param = e.currentTarget.dataset.param;
            oldValue = e.currentTarget.innerText;
            $('td').on('keyup', (e) => {
                if(e.target.innerText !== oldValue) {
                    e.currentTarget.parentNode.lastElementChild.style.opacity = 1;
                }
            });

        });
        $('td').on('blur', (e) => {
            newValue = e.currentTarget.innerText;
            if (oldValue !== newValue){
                updatePodcast(podId, param, newValue, e.currentTarget, oldValue)
                e.currentTarget.parentNode.lastElementChild.style.opacity = 0;
            } else {
                console.log(false)
            }
        });

    } catch (err) {
        console.log('Something went wrong with the search, try again later', err)
    }
};

const programs = async () => {
    state.program = new Program();

    try{
        await state.program.getResults();
        console.log(state.program.results);

        for (let program of state.program.results) {
            $("#program").append(`<option value="${program.id}">${program.title}</option>`)
        }


    }catch(err){
        console.log('Something went wrong with the search, try again later')
    }
};


const select = document.querySelector('#program');
if(select){
    select.addEventListener('input', () => {
        tbody.parentNode.style.opacity = 1
        while(tbody.childElementCount !== 1) {tbody.removeChild(tbody.lastChild)}
        loadPodcasts(select.value)
    })
}

const artikel = async () => {

    // tager hash og fjerner alt der ikke er tal som #
    let id = window.location.hash.replace(/\D/g,'');
    state.artikler = new Artikel();

    try{
        // 1) Get responce
        await state.artikler.getResults(id);


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

const loadArtikler = () => {
    var artikelContainer = document.querySelector('.artikel');
    var artikel;
    for(let i=0; i < state.artikler.results.length; i++){
        artikel = 
        `
        <div class="artikel-content" id="${state.artikler.results[i].id}">
            <img src="${state.artikler.results[i].picture}" alt="">
            <h2>${state.artikler.results[i].title}</h2>
        </div>
        `
        artikelContainer.insertAdjacentHTML('beforeEnd', artikel);
    }

    document.querySelector('.search input').addEventListener('keyup', function(){
        filterFunction();
    });

    $('.artikel img').click((e) => {
        const targetArtikel = e.target.parentElement.id;
        window.location.href = `artikel.html#${targetArtikel}`;
    });
};

function filterFunction() {
    var search, input, filter, h2, txtValue;
    search = document.querySelector(".search");
    input = search.getElementsByTagName("input");
    filter = input[0].value.toUpperCase();
    h2 = document.querySelectorAll(".artikel-content h2");
    for (var i = 0; i < h2.length; i++) {
        txtValue = h2[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h2[i].parentElement.style.display = "";
        } else {
            h2[i].parentElement.style.display = "none";
        }
    }
}

    
artikel();
programs();

window.onload = function(){
    if(window.location.hash){
        window.location.hash = ""
    }
    checkHash();

}

window.addEventListener('hashchange', function(){
    checkHash();
})

function checkHash(){
    if(document.querySelector('.dashboard')){
        if(window.location.hash ==='#art'){
            document.querySelector('.dashboard h1').innerHTML = 'WAIH Artikel Kontrolpanel';
            document.getElementById('artikler').style.display = '';
            document.getElementById('podcast').style.display = 'none';
        }else{
            document.querySelector('.dashboard h1').innerHTML = 'WAIH Podcast Kontrolpanel';
            document.getElementById('podcast').style.display = '';
            document.getElementById('artikler').style.display = 'none';
        }
    }
}
