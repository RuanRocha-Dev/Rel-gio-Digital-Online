setInterval(relogio, 1000);
setInterval(data, 1000);
setInterval(semana, 1000);

let horaCerta;
let hora;
let min;
let seg;
let horas;
let minutos;

function relogio(){
    horaCerta = new Date();
    hora = horaCerta.getHours();
    min = horaCerta.getMinutes();
    seg = horaCerta.getSeconds();
    if(hora < 10){
        hora = "0" + hora;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(seg < 10){
        seg = "0" + seg;
    }
    let horaCompleta = hora + ":" + min + ":" + seg;
    document.getElementById("cx").innerHTML= horaCompleta;
}

function despertar(){
        horas = document.getElementById("hora").value;
        minutos = document.getElementById("minutos").value;
        let despertador = new Audio("alarme.mp3");
        if(horas == hora && minutos == min){
            despertador.play();
        }
}

function cores(){
    let obj = document.getElementById("bd");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    if(hora == horas && min == minutos){
        obj.style.backgroundImage = 'url("")';
    }
    if(hora == horas && min == minutos){
        obj.style.backgroundColor = "rgb("+r+" "+g+" "+b+")";
    }
    else if(seg == 0){
        document.getElementById("bd").style.backgroundImage = "url('fundo.png')";
    }
}

function definir(){
    alert("Seu alarme foi definido para " + horas + " horas e " + minutos + " minutos" + "\n" + "BOA NOITE...");
    setInterval(cores, 1250);
    setInterval(despertar, 12000);
    despertar();
    cores();
}

function data(){
    let dataCerta = new Date();
    let ano = dataCerta.getFullYear();
    let mes = dataCerta.getMonth();
    let dia = dataCerta.getDate();
    let meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"]
    if(dia < 10){
        dia = "0" + dia;
    }
    let dataCompleta = dia + "/" + meses[mes] + "/" + ano;
    document.getElementById("data").innerHTML = dataCompleta;
}

function semana(){
    let diasSemana = new Date();
    let sem = diasSemana.getDay();
    let dias = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-feira",
        "Quinta-Feira",
        "Sexta-feira",
        "Sábado"]
    let diasCompletos = dias[sem];
    document.getElementById("semana").innerHTML = diasCompletos;
}

let hh = 0;
let mm = 0;
let ss = 0;
let ml = 0;
let cron;

function iniciar(){
    document.getElementById("tm").removeAttribute("hidden")
    cron = setInterval(() => {
        timer();
    }, 10);
}

function parar(){
    clearInterval(cron);
}

function zerar(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById("tm").innerHTML = "00:00:00:000";
}

function timer(){
    ml++;

    if(ml == 100){
        ml = 0;
        ss++;
    }
    if(ss == 60){
        ss = 0;
        mm++;
    }
    if(mm == 60){
        mm = 0;
        hh++;
    }

    let format = 
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss) +
    ":" +
    (ml < 10 ? "0" + ml : ml);

    document.getElementById("tm").innerHTML = format;
}

    window.addEventListener("load", semana);
    window.addEventListener("load", data);
    window.addEventListener("load", relogio);





