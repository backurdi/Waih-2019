import '../css/style.scss';
import '../css/upload.scss';
import '../css/animate.css';
import Program from "./model/programs";
import * as reusable from "./reusable-code";

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

programs()