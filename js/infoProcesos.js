var btnMenos = document.getElementById('btnMenos');
var tipoProc = document.getElementById('tipoProc');
var btnMas = document.getElementById('btnMas');


var gradAlc = document.getElementById('gradAlc');
var costoDiario = document.getElementById('costoDiario');
var cantLitros = document.getElementById('cantLitros');
var tempTr = document.getElementById('tempTr');

var bandera = 1;

const procesos = [

    {
        id:1,
        proceso: 'Sistema Sigmatec',
        graduacion: 'Entre 0.03 % y 0.46%',
        desperdicio: 'Aproximadamente 0.8 L',
        temperatura: '45.5°C ± 2.5°C',
        costoDiario: '$ 2.992.000 ± $160.000'
    },
    {
        id:2,
        proceso: 'Cold Contact',
        graduacion: '0.06 % ± 0.02%',
        desperdicio: 'Aproximadamente 0.5 L',
        temperatura: 'Entre - 1°C y 0°C',
        costoDiario: '$ 2.992.000 ± $220.000'
    },
    {
        id:3,
        proceso: 'Destilacion',
        graduacion: 'Entre 0.3 % y 0.5%',
        desperdicio: 'Aproximadamente 1.3 L',
        temperatura: 'Entre 97°C y 100°C',
        costoDiario: '$ 2.992.000 ± $100.000'
    },
    {
        id:4,
        proceso: 'Destilacion al Vacio',
        graduacion: '0.04 % ± 0.02%',
        desperdicio: 'Entre 0.5 L y 0.7 L',
        temperatura: 'Entre 50°C y 60°C',
        costoDiario: '$ 2.992.000 ± $200.000'
    },
    {
        id:5,
        proceso: 'Evaporacion Pelicula al Vacio',
        graduacion:  'Entre 0.02 % y 0.04%',
        desperdicio: 'Aproximadamente 0.1 L',
        temperatura: '35°C ± 5°C',
        costoDiario: '$ 2.992.000 ± $300.000'
    },

];

btnMenos.addEventListener('click',()=>{

    if(bandera > 1){
        bandera--;
        actualizarReg(bandera);
    }
});

btnMas.addEventListener('click',()=>{

    if(bandera < 5){
      
        bandera++;
        actualizarReg(bandera);
    }
});

const actualizarReg = (valor) => {

    tipoProc.value = procesos[valor-1].proceso;
    gradAlc.value = procesos[valor-1].graduacion;
    costoDiario.value = procesos[valor-1].costoDiario;
    cantLitros.value = procesos[valor-1].desperdicio;
    tempTr.value = procesos[valor-1].temperatura;
}


const cargarProceso = () => {

    tipoProc.value = procesos[0].proceso;
    gradAlc.value = procesos[0].graduacion;
    costoDiario.value = procesos[0].costoDiario;
    cantLitros.value = procesos[0].desperdicio;
    tempTr.value = procesos[0].temperatura;
}

cargarProceso();