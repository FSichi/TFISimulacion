import {modeloParticular} from '../modeloSimulacion.js'

var proceso = localStorage.getItem("proc");
var dias = localStorage.getItem("dias");

modeloParticular(dias, proceso);

$('#seccionResultadosG').hide();
$('#seccionResultadosD').hide();

var regGeneral = JSON.parse(localStorage.getItem('regMensual'));
var regDiario = JSON.parse(localStorage.getItem('regDiario'));

var titProc = document.getElementById('titProc');

const btnResultadosG = document.getElementById('btnResultadosG');
const btnResultadosD = document.getElementById('btnResultadosD');

// VARIABLES DE REGISTRO MENSUAL

var DP = document.getElementById('DP');

var GN = document.getElementById('GN');
var CM = document.getElementById('CM');
var CTL = document.getElementById('CTL');
 
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

var gradAlc = document.getElementById('gradAlc');
var costoDiario = document.getElementById('costoDiario');
var cantLitros = document.getElementById('cantLitros');
var cantLatas = document.getElementById('cantLatas');
var cantSX = document.getElementById('cantSX');


const nombreProceso = () => {

    if(proceso == 1){
        proceso = 'Sistema Sigmatec';
    }
    else if(proceso == 2){
        proceso = 'Cold Contact';
    }
    else if(proceso == 3){
        proceso = 'Destilacion';
    }
    else if(proceso == 4){
        proceso = 'Destilacion al Vacio';
    }
    else{
        proceso = 'Pelicula al Vacio'
    }

    titProc.innerHTML = 'Simulacion Particular con el Proceso ' + proceso;

}

nombreProceso();


btnResultadosG.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionMensual();
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

const cambiarSeccionMensual = () => {

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

    procS.value = regGeneral.cantS;
    procC.value = regGeneral.cantCC;
    procD.value = regGeneral.cantD;
    procDV.value = regGeneral.cantDV;
    procPV.value = regGeneral.cantPV;

    costoS.value = '$ ' + regGeneral.costoS;
    costoCC.value = '$ ' + regGeneral.costoCC;
    costoD.value = '$ ' + regGeneral.costoD;
    costoDV.value = '$ ' + regGeneral.costoDV;
    costoPV.value = '$ ' + regGeneral.costoPV;

    cantLitrosS.value = regGeneral.cantLitrosS;
    cantLitrosCC.value = regGeneral.cantLitrosCC;
    cantLitrosD.value = regGeneral.cantLitrosD;
    cantLitrosDV.value = regGeneral.cantLitrosDV;
    cantLitrosPV.value = regGeneral.cantLitrosPV;
}

const cargarRegistroDiario = () => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    gradAlc.value = regDiario[0].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[0].costoDiario;
    cantLitros.value = regDiario[0].cantLitros;
    cantLatas.value =regDiario[0].cantLatas;
    cantSX.value = regDiario[0].cantSX;
}

const actualizarRegDiario = (dia) => {

    //POR DEFECTO SE CARGA EL PRIMER DIA

    gradAlc.value = regDiario[dia-1].gradAlc + ' %';
    costoDiario.value = '$ ' + regDiario[dia-1].costoDiario;
    cantLitros.value = regDiario[dia-1].cantLitros;
    cantLatas.value =regDiario[dia-1].cantLatas;
    cantSX.value = regDiario[dia-1].cantSX;
}


