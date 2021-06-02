import {modeloSimulacion} from '../modeloSimulacion.js'

modeloSimulacion();

var regMensual = JSON.parse(localStorage.getItem('regMensual'));
var regDiario = JSON.parse(localStorage.getItem('regDiario'));

$('#seccionResultadosM').hide();
$('#seccionResultadosD').hide();

const btnResultadosM = document.getElementById('btnResultadosM');
const btnResultadosD = document.getElementById('btnResultadosD');

// VARIABLES DE REGISTRO MENSUAL

var GN = document.getElementById('GN');
var CM = document.getElementById('CM');
var CTL = document.getElementById('CTL');
var IM = document.getElementById('IM');

var procS = document.getElementById('procS');
var procC = document.getElementById('procC');
var procD = document.getElementById('procD');
var procDV = document.getElementById('procDV');
var procPV = document.getElementById('procPV');

var costoS = document.getElementById('costoS');
var costoCC = document.getElementById('costoCC');
var costoD = document.getElementById('costoD');
var costoDV = document.getElementById('costoDV');
var costoPV = document.getElementById('costoPV');

var cantLitrosS = document.getElementById('cantLitrosS');
var cantLitrosCC = document.getElementById('cantLitrosCC');
var cantLitrosD = document.getElementById('cantLitrosD');
var cantLitrosDV = document.getElementById('cantLitrosDV');
var cantLitrosPV = document.getElementById('cantLitrosPV');

// VARIABLES DE REGISTRO DIARIO

var btnMenos = document.getElementById('btnMenos');
var numDia = document.getElementById('numDia');
var btnMas = document.getElementById('btnMas');

var procUt = document.getElementById('procUt');
var gradAlc = document.getElementById('gradAlc');
var costoDiario = document.getElementById('costoDiario');
var cantLitros = document.getElementById('cantLitros');
var cantLatas = document.getElementById('cantLatas');
var cantSX = document.getElementById('cantSX');

btnMenos.addEventListener('click',()=>{

    if(parseInt(numDia.value) > 1){
      
        numDia.value = parseInt(numDia.value) - 1;

        actualizarRegDiario(parseInt(numDia.value));
    }
});

btnMas.addEventListener('click',()=>{

    if(parseInt(numDia.value) < 30){
      
        numDia.value = parseInt(numDia.value) + 1;

        actualizarRegDiario(parseInt(numDia.value));
    }
});

btnResultadosM.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionMensual();
});

btnResultadosD.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionDiaria();
});


const cambiarSeccionMensual = () => {

    let text = '';
    
    if( $("#btnResultadosM").text() === "Mostrar Registro" ){
        $("#seccionResultadosM").show();
        $("#resultadosDiarios").hide();
        text = "Ocultar Registro";
    }
    else{
        $("#seccionResultadosM").hide();
        $("#resultadosDiarios").show();
        text = "Mostrar Registro";
    }

    $("#btnResultadosM").html(text);

    cargarRegistroMensual();

}

const cambiarSeccionDiaria = () => {

    let text = '';

    if( $("#btnResultadosD").text() === "Mostrar Registros" ){
        $("#seccionResultadosD").show();
        $("#resultadosMensuales").hide();
        text = "Ocultar Registros";
    }
    else{
        $("#seccionResultadosD").hide();
        $("#resultadosMensuales").show();
        text = "Mostrar Registros";
    }

    $("#btnResultadosD").html(text);

    cargarRegistroDiario();

}

const cargarRegistroMensual = () => {

    IM.value = '$ ' + regMensual.ingresoMensual;
    GN.value = '$ ' + regMensual.gananciaNeta;
    CM.value = '$ ' + regMensual.costoMensual;
    CTL.value = regMensual.cantLitrosTot;


    procS.value = regMensual.cantS;
    procC.value = regMensual.cantCC;
    procD.value = regMensual.cantD;
    procDV.value = regMensual.cantDV;
    procPV.value = regMensual.cantPV;

    costoS.value = '$ ' + regMensual.costoS;
    costoCC.value = '$ ' + regMensual.costoCC;
    costoD.value = '$ ' + regMensual.costoD;
    costoDV.value = '$ ' + regMensual.costoDV;
    costoPV.value = '$ ' + regMensual.costoPV;

    cantLitrosS.value = regMensual.cantLitrosS;
    cantLitrosCC.value = regMensual.cantLitrosCC;
    cantLitrosD.value = regMensual.cantLitrosD;
    cantLitrosDV.value = regMensual.cantLitrosDV;
    cantLitrosPV.value = regMensual.cantLitrosPV;
}

const cargarRegistroDiario = () => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    procUt.value = regDiario[0].procUt;
    gradAlc.value = regDiario[0].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[0].costoDiario;
    cantLitros.value = regDiario[0].cantLitros;
    cantLatas.value =regDiario[0].cantLatas;
    cantSX.value = regDiario[0].cantSX;
}

const actualizarRegDiario = (dia) => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    procUt.value = regDiario[dia-1].procUt;
    gradAlc.value = regDiario[dia-1].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[dia-1].costoDiario;
    cantLitros.value = regDiario[dia-1].cantLitros;
    cantLatas.value =regDiario[dia-1].cantLatas;
    cantSX.value = regDiario[dia-1].cantSX;
}

