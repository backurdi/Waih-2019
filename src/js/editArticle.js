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


const updateAttr = async (prop, data) => {
    id = window.location.hash.replace(/\D/g, '');

    try {
        await state.artikel.updateAttr(id, prop, data);

        console.log('update:true');
        const button = document.getElementById('submit');

        button.style.backgroundColor = "limeGreen";
        setTimeout(() => {
            button.style.backgroundColor = "white";

        }, 800);

    } catch (error) {
        console.log(error)
    }
}

const deleteArtikel = async () => {
    id = window.location.hash.replace(/\D/g, '');

    try {
        await state.artikel.deleteArtikel(id);

        console.log('artikel deleted')
        window.location.href = "http://waih.dk/dashboard.html#art";

    } catch (error) {
        console.log(error)
    }
}

const updatePic = async (id) => {
    id = window.location.hash.replace(/\D/g, '');
    let formData = new FormData();
    formData.append('picture', document.getElementById('picture').files[0]);

    console.log(formData.has('picture'));
    try {
        await state.artikel.updatePic(id, formData);

        console.log('updatepic:true');

        const button = document.getElementById('submit');

        button.style.backgroundColor = "limeGreen";
        setTimeout(() => {
            button.style.backgroundColor = "white";

        }, 800);




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
        updateAttr(e.currentTarget.dataset.prop, newValue)
    } else {
        console.log('ingen ændring')
    }
});

$('select').on('change', (e) => {
    updateAttr('type', e.currentTarget.value);
});

$("input[type=file]").on('click', () => {
    $(this).val("");
});
$('input[type=file]').on('change', (e) => {
    updatePic();

});

$('input[type=button]').on('click', (e) => {
    e.target.style.backgroundColor = "limeGreen";
    setTimeout(() => {
        e.target.style.backgroundColor = "white";

    }, 800);
});

$('#delete').on('click', (e) => {
    let confirmation = confirm('Er du sikker på at du vil slette denne artikel?');
    3
    if (confirmation) deleteArtikel();
})