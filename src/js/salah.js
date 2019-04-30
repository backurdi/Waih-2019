import Salah from "./model/salah";

const state = {};

const salah = async () => {
    state.salah = new Salah();

    try{
        await state.salah.getResults();
        console.log(state.salah.results)
    } catch (e) {
}}
salah();

setTimeout(() => {
    console.log(state.salah.results);
    document.querySelectorAll('.fajr')[0].innerHTML = state.salah.results[0].fajr;
    document.querySelectorAll('.shuruq')[0].innerHTML = state.salah.results[0].shuruq;
    document.querySelectorAll('.dhuhur')[0].innerHTML = state.salah.results[0].dhuhr;
    document.querySelectorAll('.asr')[0].innerHTML = state.salah.results[0].asr;
    document.querySelectorAll('.maghreb')[0].innerHTML = state.salah.results[0].maghrib;
    document.querySelectorAll('.isha')[0].innerHTML = state.salah.results[0].isha;
    
    document.querySelectorAll('.fajr-mobil')[0].innerHTML = state.salah.results[0].fajr;
    document.querySelectorAll('.shuruq-mobil')[0].innerHTML = state.salah.results[0].shuruq;
    document.querySelectorAll('.dhuhur-mobil')[0].innerHTML = state.salah.results[0].dhuhr;
    document.querySelectorAll('.asr-mobil')[0].innerHTML = state.salah.results[0].asr;
    document.querySelectorAll('.maghreb-mobil')[0].innerHTML = state.salah.results[0].maghrib;
    document.querySelectorAll('.isha-mobil')[0].innerHTML = state.salah.results[0].isha;

    setSalahTime('.salah-times', 'salah-time');
    setSalahTime('.salah-times-desktop', 'salah-time-desktop');
    salahToggle();
}, 100);

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
        console.log(el.innerHTML, time);
        if(el.innerHTML <= time){
            possibleSalah.push(el);
        }
    });
    lastSalah.id = "";
    if(possibleSalah.length === 0){
        document.querySelectorAll('.last')[0].id = salahActive;
    }else{
        console.log(possibleSalah);
        let currentSalah = possibleSalah.pop();
        console.log(currentSalah);
        currentSalah.parentNode.id = salahActive;
    }
}