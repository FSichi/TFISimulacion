
$('#seccionProcesos').hide();
$('#seccionParametros').hide();

//---------------------------------------------------------------------------------------------------------//

//BOTONES DE METODOS
var btnProceso = document.getElementById('btnProceso');
var btnParametros = document.getElementById('btnParametros');

//BOTONES DE PROCESOS
var btnSigmatec = document.getElementById('btnSigmatec');
var btnDestilacion = document.getElementById('btnDestilacion');
var btnCold = document.getElementById('btnCold');
var btnVacio = document.getElementById('btnVacio');
var btnEvaporacion = document.getElementById('btnEvaporacion');
var btnFlujo = document.getElementById('btnFlujo');

//BOTONES DE PARAMETROS

var numDias = document.getElementById('rango');
var numDiasPar = document.getElementById('rangoPar');
var iconoAyuda = document.getElementById('iconoAyuda');


//---------------------------------------------------------------------------------------------------------//

// BOTONES DE INFORMACION DE LOS PARAMETROS
const checkGraduacion = document.getElementById('checkGraduacion');
const checkCosto = document.getElementById('checkCosto');
const checkDesperdicio = document.getElementById('checkDesperdicio');
const checkTemperatura = document.getElementById('checkTemperatura');

// IDS DE LOS BOTONES DE ACCION DE LOS PARAMETROS

//GRADUACION 
const btnMenosGradMn = document.getElementById('btnMenosGradMn');
const btnMasGradnMn = document.getElementById('btnMasGradnMn');
const gradMin = document.getElementById('gradMin');
const gradMax = document.getElementById('gradMax');
const btnMenosGradMx = document.getElementById('btnMenosGradMx');
const btnMasGradMx = document.getElementById('btnMasGradMx');

//COSTOS
const costoNormal = document.getElementById('costoNormal');
const costoDesviacion = document.getElementById('costoDesviacion');

//DESPERDICIO
const btnMenosLt = document.getElementById('btnMenosLt');
const despLitros = document.getElementById('despLitros');
const btnMasLt = document.getElementById('btnMasLt');

//TEMPERATURA
const tempMin = document.getElementById('tempMin');
const tempMax = document.getElementById('tempMax');

//---------------------------------------------------------------------------------------------------------//

numDias = 15;

$('#rango').on('change',()=>{
    numDias = $('#rango').val();
});

$('#rangoPar').on('change',()=>{
    numDiasPar = $('#rangoPar').val();
});

//EVENTOS CLICK DE SECCIONES

iconoAyuda.addEventListener('click', () => {
    Swal.fire({
        title: '<h1 style="color:#fff; font-size:3rem;">Flujo Estandar</h1>',
        html: '<p style="color:#fff;">Esto simulara un plazo de 30 dias con todos los procesos</p>',
        icon: 'question',
        width: '30%',
        background: '#163d6b',
      });
})

btnProceso.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionProcesos();
});

btnParametros.addEventListener('click', (e) => {
    e.preventDefault();
    cambiarSeccionParametros();
});


//EVENTOS CLICK DE PROCESOS

btnSigmatec.addEventListener('click', () => {
    localStorage.setItem("proc", 1);
    localStorage.setItem("dias", numDias);
});

btnDestilacion.addEventListener('click', () => {
    localStorage.setItem("proc", 3);
    localStorage.setItem("dias", numDias);
});

btnCold.addEventListener('click', () => {
    localStorage.setItem("proc", 2);
    localStorage.setItem("dias", numDias);
});

btnVacio.addEventListener('click', () => {
    localStorage.setItem("proc", 4);
    localStorage.setItem("dias", numDias);
});

btnEvaporacion.addEventListener('click', () => {
    localStorage.setItem("proc", 5);
    localStorage.setItem("dias", numDias);
});


//-------------------------------------------------------------------------------------------------------------------------------------------------//

checkGraduacion.addEventListener('click', (e) => {

    Swal.fire({
        title: '<h1 style="color:#fff; font-size:3rem;">Distribucion Uniforme</h1>',
        html: '<p style="color:#fff;">La graduacion Alcoholica sera simulada con una distribucion Uniforme, mediante un minimo y maximo</p>',
        width: '40%',
        background: '#163d6b',
      });

});

checkCosto.addEventListener('click', (e) => {

    Swal.fire({
        title: '<h1 style="color:#fff; font-size:3rem;">Distribucion Normal</h1>',
        html: '<p style="color:#fff;">La Diferencia de Costo Productivo Diaria sera simulada con una distribucion Normal, mediante una Media y una Desviacion</p>',
        width: '40%',
        background: '#163d6b',
      });

});

checkDesperdicio.addEventListener('click', (e) => {

    Swal.fire({
        title: '<h1 style="color:#fff; font-size:3rem;">Distribucion Exponencial</h1>',
        html: '<p style="color:#fff;">El desperdicio Productivo en Litros al Dia sera simulado con una distribucion Exponencial, mediante un valor establecido</p>',
        width: '40%',
        background: '#163d6b',
      });

});

checkTemperatura.addEventListener('click', (e) => {

    Swal.fire({
        title: '<h1 style="color:#fff; font-size:3rem;">Distribucion Uniforme</h1>',
        html: '<p style="color:#fff;">La temperatura de Trabajo del proceso sera simulada con una distribucion Uniforme, mediante un minimo y maximo</p>',
        width: '40%',
        background: '#163d6b',
      });

});

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

// ------ GRADUACION ------//

btnMenosGradMn.addEventListener('click', (e) => {
    if(parseFloat(gradMin.value) > 0.01){
        gradMin.value = parseFloat(gradMin.value) - 0.01;
        gradMin.value = parseFloat(gradMin.value).toFixed(2);
    }
});

btnMasGradnMn.addEventListener('click', (e) => {
    if(parseFloat(gradMin.value) < (parseFloat(gradMax.value) - 0.01)){
        gradMin.value = parseFloat(gradMin.value) + 0.01;
        gradMin.value = parseFloat(gradMin.value).toFixed(2);
    }
});

btnMenosGradMx.addEventListener('click', (e) => {
    if(parseFloat(gradMax.value) > (parseFloat(gradMin.value) + 0.01)){
        gradMax.value = parseFloat(gradMax.value) - 0.01;
        gradMax.value = parseFloat(gradMax.value).toFixed(2);
    }
});

btnMasGradMx.addEventListener('click', (e) => {
    if(parseFloat(gradMax.value) < 0.5){
        gradMax.value = parseFloat(gradMax.value) + 0.01;
        gradMax.value = parseFloat(gradMax.value).toFixed(2);
    }
});

// ------ DESPERDICIO ------//

btnMenosLt.addEventListener('click', (e) => {
    if(parseFloat(despLitros.value) > 0.1){
        despLitros.value = parseFloat(despLitros.value) - 0.1;
        despLitros.value = parseFloat(despLitros.value).toFixed(1);
    }
});

btnMasLt.addEventListener('click', (e) => {
    if(parseFloat(despLitros.value) < 10){
        despLitros.value = parseFloat(despLitros.value) + 0.1;
        despLitros.value = parseFloat(despLitros.value).toFixed(1);
    }
});



$('#btnPar').click(function(e) {
    
    localStorage.setItem("gradMin", gradMin.value);
    localStorage.setItem("gradMax", gradMax.value);
    localStorage.setItem("costoNormal", costoNormal.value);
    localStorage.setItem("costoDesviacion", costoDesviacion.value);
    localStorage.setItem("despLitros", despLitros.value);
    localStorage.setItem("tempMin", tempMin.value);
    localStorage.setItem("tempMax", tempMax.value);
    localStorage.setItem("diasPar", numDiasPar);

    window.location.href='../pages/simulacionParametros.html';
} );

//-------------------------------------------------------------------------------------------------------------------------------------------------// 



//FUNCIONES DE TRABAJO DE HTML Y JQUERY 3.6.0

const cambiarSeccionProcesos = () => {

    let text = '';
    
    if( $("#btnProceso").text() === "Seleccione Proceso" ){
        $("#seccionProcesos").show();
        $("#Parametros").hide();
        text = "Ocultar Procesos";
    }
    else{
        $("#seccionProcesos").hide();
        $("#Parametros").show();
        text = "Seleccione Proceso";
    }

    $("#btnProceso").html(text);

}

const cambiarSeccionParametros = () => {

    let text = '';

    if( $("#btnParametros").text() === "Establecer Parametros" ){
        $("#seccionParametros").show();
        $("#Procesos").hide();
        text = "Ocultar Parametros";
    }
    else{
        $("#seccionParametros").hide();
        $("#Procesos").show();
        text = "Establecer Parametros";
    }

    $("#btnParametros").html(text);

}
