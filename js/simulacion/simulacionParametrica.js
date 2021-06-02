import {modeloParametrico} from '../modeloSimulacion.js'

$('#seccionResultadosG').hide();
$('#seccionResultadosD').hide();

var gradMin = localStorage.getItem("gradMin");
var gradMax = localStorage.getItem("gradMax");
var costoNormal = localStorage.getItem("costoNormal");
var costoDesviacion = localStorage.getItem("costoDesviacion");
var despLitros = localStorage.getItem("despLitros");
var tempMin = localStorage.getItem("tempMin");
var tempMax = localStorage.getItem("tempMax");
var dias = localStorage.getItem("diasPar");


var graduacion = [gradMin,gradMax];
var costos = [costoNormal,costoDesviacion];
var temperatura = [tempMin, tempMax];


modeloParametrico(graduacion,costos,temperatura,despLitros,dias);

var regGeneral = JSON.parse(localStorage.getItem('regMensual'));
var regDiario = JSON.parse(localStorage.getItem('regDiario'));


const btnResultadosG = document.getElementById('btnResultadosG');
const btnResultadosD = document.getElementById('btnResultadosD');

// VARIABLES DE REGISTRO MENSUAL

var DP = document.getElementById('DP');
var GN = document.getElementById('GN');
var CM = document.getElementById('CM');
var CTL = document.getElementById('CTL');
var CLD = document.getElementById('CLD');

// VARIABLES DE REGISTRO DIARIO
var btnMenos = document.getElementById('btnMenos');
var numDia = document.getElementById('numDia');
var btnMas = document.getElementById('btnMas');

var gradAlc = document.getElementById('gradAlc');
var costoDiario = document.getElementById('costoDiario');
var tempDiaria = document.getElementById('tempDiaria');
var cantLitros = document.getElementById('cantLitros');
var cantLatas = document.getElementById('cantLatas');
var cantSX = document.getElementById('cantSX');


btnResultadosG.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionGeneral();
});

btnResultadosD.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionDiaria();
});

btnMenos.addEventListener('click',()=>{

    if(parseInt(numDia.value) > 1){
      
        numDia.value = parseInt(numDia.value) - 1;

        actualizarRegDiario(parseInt(numDia.value));
    }

});

btnMas.addEventListener('click',()=>{
   

    if(parseInt(numDia.value) < dias){
      
        numDia.value = parseInt(numDia.value) + 1;

        actualizarRegDiario(parseInt(numDia.value));
    }
});


const cambiarSeccionGeneral = () => {

    let text = '';
    
    if( $("#btnResultadosG").text() === "Mostrar Registro" ){
        $("#seccionResultadosG").show();
        $("#resultadosDiarios").hide();
        text = "Ocultar Registro";
    }
    else{
        $("#seccionResultadosG").hide();
        $("#resultadosDiarios").show();
        text = "Mostrar Registro";
    }

    $("#btnResultadosG").html(text);

    cargarRegistroGeneral();   

}

const cambiarSeccionDiaria = () => {

    let text = '';

    if( $("#btnResultadosD").text() === "Mostrar Registros" ){
        $("#seccionResultadosD").show();
        $("#resultadosGenerales").hide();
        text = "Ocultar Registros";
    }
    else{
        $("#seccionResultadosD").hide();
        $("#resultadosGenerales").show();
        text = "Mostrar Registros";
    }

    $("#btnResultadosD").html(text);

    cargarRegistroDiario();  // TENGO QUE HACER ESTE METODO
}

const cargarRegistroGeneral = () => {

    DP.value = dias;
    GN.value = '$ ' + regGeneral.gananciaNeta;
    CM.value = '$ ' + regGeneral.costoMensual;
    CTL.value = regGeneral.cantLitrosTot;
    CLD.value = regGeneral.cantLitrosDesp;

}

const cargarRegistroDiario = () => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    gradAlc.value = regDiario[0].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[0].costoDiario;
    tempDiaria.value = regDiario[0].tempDiaria + '°C'
    cantLitros.value = regDiario[0].cantLitros;
    cantLatas.value =regDiario[0].cantLatas;
    cantSX.value = regDiario[0].cantSX;
}

const actualizarRegDiario = (dia) => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    gradAlc.value = regDiario[dia-1].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[dia-1].costoDiario;
    tempDiaria.value = regDiario[dia-1].tempDiaria + '°C'
    cantLitros.value = regDiario[dia-1].cantLitros;
    cantLatas.value =regDiario[dia-1].cantLatas;
    cantSX.value = regDiario[dia-1].cantSX;
}
