import '../css/style.scss';
import '../css/upload.scss';
import '../css/animate.css';
import Artikel from "./model/artikler";
import * as reusable from "./reusable-code";

reusable.head('.head', './reusable/head.html');
reusable.dbnav('.nav', './reusable/dbnav.html');

const items = {
    title: document.getElementById('title'),
    subtitle: document.getElementById('subtitle'),
    author: document.getElementById('author'),
    type: document.getElementById('type'),
    quote: document.getElementById('quote'),
    body: document.getElementById('description'),
};
let keys = Object.keys(items);
let state = {};

const artikel = async () => {
    state.artikel = new Artikel;
    let id = window.location.hash.replace(/\D/g, '');

    try {
        await state.artikel.getResults(id);
        for (let i = 0; i < keys.length; i++) {
            replaceContent(keys[i]);
        }
    } catch (error) {
        console.log(error)
    }
};

const replaceContent = (el) => {
    items[el].value = state.artikel.results[0][el];
};

document.getElementById('submit').addEventListener('click', () => {
    let inputs = document.getElementsByClassName('upload_form-a')[0];
    let id = window.location.hash.replace(/\D/g, '');
    let newData = {};
    for (let input of inputs) {
        if(input.name && input.value !== '')
            newData[input.name] = input.value
    }°°
        updateArtikel(id, newData);
})

artikel();


const updateArtikel = async (id, data) => {
    try {
        await state.artikel.update(id, data);


    } catch (error) {
        console.log(error)
    }
}