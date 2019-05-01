import Salah from "./model/salah";

const state = {};

const salah = async () => {
    state.salah = new Salah();

    try{
        await state.salah.getResults();
        $('.fajr').text(state.salah.results[0].fajr);
        $('.shuruq').text(state.salah.results[0].shuruq);
        $('.dhuhur').text(state.salah.results[0].dhuhr);
        $('.asr').text(state.salah.results[0].asr);
        $('.maghreb').text(state.salah.results[0].maghrib);
        $('.isha').text(state.salah.results[0].isha);

        $('.fajr-mobil').text(state.salah.results[0].fajr);
        $('.shuruq-mobil').text(state.salah.results[0].shuruq);
        $('.dhuhur-mobil').text(state.salah.results[0].dhuhr);
        $('.asr-mobil').text(state.salah.results[0].asr);
        $('.maghreb-mobil').text(state.salah.results[0].maghrib);
        $('.isha-mobil').text(state.salah.results[0].isha);

        setSalahTime('.salah-times', 'salah-time');
        setSalahTime('.salah-times-desktop', 'salah-time-desktop');
        salahToggle();
    } catch (e) {
}}
salah();

//salah tider
let salahToggle = function(){
    const salahButton = document.querySelector('#salah-button');
    const salahTimes = document.querySelector('.salah-times');
    salahButton.addEventListener('click', function(){
        if(salahTimes.classList.contains('salah-active')){
            salahTimes.classList.remove('salah-active');
        }else{
            salahTimes.classList.add('salah-active');
        }
    })
};

function setSalahTime(salahUl, salahActive){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let time;
    if(hour < 10){
        hour = "0" + today.getHours();
    }
    if(min < 10){
        min = "0" + today.getMinutes();
    }
    time = hour + ":" + min;

    let salah = document.querySelectorAll(salahUl + ' p');
    let lastSalah = document.getElementById(salahActive);
    let possibleSalah = [];
    salah.forEach(function(el){
        if(el.innerHTML <= time){
            possibleSalah.push(el);
        }
    });
    lastSalah.id = "";
    if(possibleSalah.length === 0){
        document.querySelectorAll('.last')[0].id = salahActive;
    }else{
        let currentSalah = possibleSalah.pop();
        currentSalah.parentNode.id = salahActive;
    }
}
