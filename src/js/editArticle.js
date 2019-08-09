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

artikel();


const updateAttr = async (id, prop, data) => {
    try {
        await state.artikel.updateAttr(id, prop, data);

        console.log('update:true')

    } catch (error) {
        console.log(error)
    }
}

const updatePic = async (id) => {
    id = window.location.hash.replace(/\D/g, '');

    try {
        await state.artikel.updatePic(id);

        console.log('updatepic:true')

    } catch (error) {
        console.log(error)
    }
}

let id, param, oldValue, newValue;

$('.input').on('focus', (e) => {
    id = window.location.hash.replace(/\D/g, '');
    param = e.currentTarget.name;
    oldValue = e.currentTarget.value;
});

$('.input').on('blur', (e) => {
    newValue = e.currentTarget.value;
    if (oldValue !== newValue) {
        updateAttr(id, e.currentTarget.dataset.prop, newValue)
    } else {
        console.log('ingen ændring')
    }
});

$('select').on('change', (e) => {
    updateAttr(id, 'type', e.currentTarget.value);
});

$("input[type=file]").on('click' , () => {
    $(this).val("");
});
$('input[type=file]').on('change', (e) => {

    updatePic()
})
