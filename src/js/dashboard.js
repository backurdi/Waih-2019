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
                    <td data-param="title" contenteditable>${podcast.title}</td>   
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
select.addEventListener('input', () => {
    tbody.parentNode.style.opacity = 1
    while(tbody.childElementCount !== 1) {tbody.removeChild(tbody.lastChild)}
    loadPodcasts(select.value)
})

programs();
