import '../css/style.scss';
import '../css/upload.scss';
import '../css/animate.css';
import '../css/queries.css';
import Program from "./model/programs";

let state = {}

const programs = async () => {

    state.program = new Program();

    try{
        await state.program.getResults();
        console.log(state.program.results)

        for (let program of state.program.results) {
            $("#programId").append(`<option value="${program.id}">${program.title}</option>`)
        }



    }catch(err){
        console.log('Something went wrong with the search, try again later')
    }
};

programs()


//fireworks on submit podcast/arcticle
$("#submit").on('click', () => {
    let response = false;
    let fields = $(".input")
        .find(" textarea, input").serializeArray();

    $.each(fields, (i, field) => {
        if (field.value)
            response = true;
    });
    if (response) {
        const b = $('.body');
        b.prepend('<div class="before"></div>');
        b.append('<div class="after"></div>');

        setTimeout(() => ($('.before, .after').remove()), 5000)
    }
});
