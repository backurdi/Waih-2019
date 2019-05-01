import * as reusable from './reusable-code';
import '../css/dashboard.scss';
import '../css/animate.css';
import Podcast from "./model/podcast";
import Program from "./model/programs";

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
}

const loadPodcasts = async (id) => {
    state.podcast = new Podcast();
    try {
        // 1) Get responce
        await state.podcast.get(id);
        console.log(state.podcast.results);

        for (let podcast of state.podcast.results) {

            let podRow =
                `<tr class="animated fadeIn">
                    <td contenteditable>${podcast.title}</td>   
                    <td contenteditable>${podcast.hostname}</td>   
                    <td contenteditable>${podcast.title}</td>   
                    <td contenteditable>${podcast.guestname}</td>
                    <td contenteditable>${podcast.description}</td>    
                    <td style="padding: 0"><input data-id="${podcast.id}" type="button" class="delete" value="Slet"></td>    
                 </tr>`;
            tbody.insertAdjacentHTML('beforeEnd', podRow);
        }
        $('.delete').on('click', (e) => {
            let title = e.currentTarget.parentNode.parentNode.firstElementChild.innerHTML;
            let id = e.currentTarget.dataset.id;
            let index = e.currentTarget.parentNode.parentNode.rowIndex
            if(confirm('Er du sikker på at du vil slette podcasten med titlen: \n"'+ title + '" ?')) {
                deletePodcast(id, index);
            }
        })

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
select.addEventListener('input', () => {
    tbody.parentNode.style.opacity = 1
    while(tbody.childElementCount !== 1) {tbody.removeChild(tbody.lastChild)}
    loadPodcasts(select.value)
})

programs();
