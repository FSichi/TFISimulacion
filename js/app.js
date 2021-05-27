
$('#seccionProcesos').hide();
$('#seccionParametros').hide();

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
var iconoAyuda = document.getElementById('iconoAyuda');

numDias = 15;

$('#rango').on('change',()=>{
    numDias = $('#rango').val();
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
