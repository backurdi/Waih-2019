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
}
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
        console.log(state.artikel.results);
    } catch (error) {
        console.log(error)
    }
}

const replaceContent = (el) => {
    items[el].value = state.artikel.results[0][el];
}

artikel();