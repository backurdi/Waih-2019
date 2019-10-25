import '../css/style.scss';
import '../css/upload.scss';
import '../css/animate.css';
import Program from "./model/programs";
import Podcast from "./model/podcast";
import * as reusable from "./reusable-code";
import states from "plyr/src/js/config/states";

reusable.head('.head', './reusable/head.html');
reusable.dbnav('.nav', './reusable/dbnav.html');

let state = {};

const programs = async () => {

    state.program = new Program();

    try {
        await state.program.getResults();
        console.log(state.program.results)

        for (let program of state.program.results) {
            $("#programId").append(`<option value="${program.id}">${program.title}</option>`)
        }



    } catch (err) {
        console.log('Something went wrong with the search, try again later')
    }
};

    const podcastForm = document.getElementById('uploadPodcast');
    podcastForm.addEventListener('submit', async e  => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const hostname = document.getElementById('hostname').value;
        const guestname = document.getElementById('guestname').value;
        const description = document.getElementById('description').value;
        const programId = document.getElementById('programId').value;
        const mediaFile = document.querySelector('[type=file]').files;
        const formData = new FormData();

        formData.append('title', title);
        formData.append('hostname', hostname);
        formData.append('guestname', guestname);
        formData.append('description', description);
        formData.append('programId', programId);
        formData.append('audioPath', mediaFile[0]);


        podcastupload(formData);

    });

    const podcastupload = async (formdata) => {

        state.podcast = new Podcast();
        try {
            await state.podcast.upload(formdata);
            console.log(state.podcast);
            if (state.podcast.results === true) {
                let inputs = document.querySelectorAll('.flipInX');

                for (let i =0; i<inputs.length; i++) {
                    console.log(inputs[i])
                    inputs[i].animate([
                        {border: "1px solid black"},
                        {border: "1px solid mediumspringgreen"},
                        {border: "1px solid mediumspringgreen"},
                        {border: "1px solid mediumspringgreen"},
                        {border: "1px solid black"}
                        ], {
                        duration: 3000
                    })
                }
            }

            podcastForm.reset();

        } catch (err) {
            console.log('Something went wrong with the search, try again later' , err)
        }
    }


const articleForm = document.getElementById('uploadArticle');
podcastForm.addEventListener('submit', async e  => {
    e.preventDefault();

    const title = document.getElementById('title')
    const subtitle = document.getElementById('subtitle')
    const author = document.getElementById('author')
    const type = document.getElementById('type')
    const quote = document.getElementById('quote')
    const picture = document.querySelector('[type=file]').files;
    const pictureText = document.getElementById('pictureText')
    const body = document.getElementById('description')
    const formData = new FormData();

    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('author', author);
    formData.append('type', type);
    formData.append('quote', quote);
    formData.append('picture', picture);
    formData.append('pictureText', pictureText);
    formData.append('body', body);


    articleupload(formData);

});
const articleupload = async (formdata) => {

    state.article = new Podcast();
    try {
        await state.article.upload(formdata);
        console.log(state.article);
        if (state.article.results === true) {
            let inputs = document.querySelectorAll('.flipInX');

            for (let i =0; i<inputs.length; i++) {
                console.log(inputs[i])
                inputs[i].animate([
                    {border: "1px solid black"},
                    {border: "1px solid mediumspringgreen"},
                    {border: "1px solid mediumspringgreen"},
                    {border: "1px solid mediumspringgreen"},
                    {border: "1px solid black"}
                ], {
                    duration: 3000
                })
            }
        }

        articleForm.reset();

    } catch (err) {
        console.log('Something went wrong with the search, try again later' , err)
    }
};



programs()
