console.log('det fungere');

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
