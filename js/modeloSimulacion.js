import {metodoCongruencialMult, distribucionNormal, distribucionUniforme, distribucionExponencial} from './library/libreriaMetodos.js';

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

//VARIABLES MENSUALES

var CTL = 0 ;       // --> Cantidad Total de Litros Producidos Durante todo el Mes
var PTL = 0 ;       // --> Cantidad Total de Litros Desperdiciados Durante todo el Mes.

var CM = 0 ;        // --> Costos Mensuales
var IM = 0 ;        // --> Ingresos Mensuales
var GN = 0 ;        // --> Ganancia Neta (Ingresos - Costos )[IM - CM]

var CS = 0 ;       // --> Cantidad Total de Veces que se utilizo el Proceso Sigmatec
var CC = 0 ;       // --> Cantidad Total de Veces que se utilizo el Proceso Cold Contact
var CDS = 0 ;       // --> Cantidad Total de Veces que se utilizo el Proceso Destilacion
var CDV = 0 ;      // --> Cantidad Total de Veces que se utilizo el Proceso Destilacion al Vacio
var CPV = 0 ;      // --> Cantidad Total de Veces que se utilizo el Proceso Evaporacion de Pelicula al Vacio

var CTS = 0 ;       // --> Costo Total Asociado al Proceso Sigmatec durante todo el Mes
var CTC = 0 ;       // --> Costo Total Asociado al Proceso Cold Contac durante todo el Mes
var CTD = 0 ;       // --> Costo Total Asociado al Proceso Destilacion durante todo el Mes
var CTDV = 0 ;      // --> Costo Total Asociado al Proceso Destilacion al Vacio durante todo el Mes
var CTPV = 0 ;      // --> Costo Total Asociado al Proceso Evaporacion de Pelicula al Vacio durante todo el Mes

var CLS = 0 ;       // --> Cantidad Total de Litros Desperdiciados por el Proceso Sigmatec
var CLC = 0 ;       // --> Cantidad Total de Litros Desperdiciados por el Proceso Cold Contact
var CLD = 0 ;       // --> Cantidad Total de Litros Desperdiciados por el Proceso Destilacion
var CLDV = 0 ;      // --> Cantidad Total de Litros Desperdiciados por el Proceso Destilacion al Vacio
var CLPV = 0 ;      // --> Cantidad Total de Litros Desperdiciados por el Proceso Evaporacion de Pelicula al Vacio

//VARIABLES DIARIAS

var P = 0 ;     // --> Numero que hace referencia al Proceso
var GD = 0;     // --> Ganancia Diaria
var CD = 0;     // --> Costo Diario
var L = 0;      // --> Cantidad de Litros Diarios Producidos
var CL = 0;     // --> Cantidada de Latas Producidas Diariamente
var CX = 0;     // --> Cantidad de paquetes de Six Packs Armados
var GA = 0;     // --> Graduacion Alcoholica
var DL = 0;     // --> Cantidad de Litros Desperdiciados Diariamente
var TD = 0;     // --> Temperatura de Trabajo Diaria 

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

var u = 0;
var d = 1;

var diasArray = [];


//-------------------------------------------------------------------------------------------------------------------------------------------------// 

export const modeloSimulacion = () => {
    
    diasArray = [];

    CTL = 0; PTL = 0 ; CM = 0 ; IM = 0 ; GN = 0 ;
    CS = 0 ; CC = 0 ; CDS = 0 ; CDV = 0 ; CPV = 0 ;     
    CTS = 0 ; CTC = 0 ; CTD = 0 ; CTDV = 0 ; CTPV = 0 ;     
    CLS = 0 ; CLC = 0 ; CLD = 0 ; CLDV = 0 ; CLPV = 0 ;      

    //SIMULACION DE LOS 30 DIAS

    for(d = 1 ; d <= 30 ; d++){

        simularDia();
    }

    GN = ( IM - CM );

    mostrarRegGeneral(0);
}

const simularDia = () => {

    P = 0; GD = 0;

    //DISTRIBUCION UNIFORME DE LA CANTIDAD DE LITROS PRODUCIDOS DIARIOS
    L  = distribucionUniforme(18000, 20000, 0);

    CTL = (CTL + L);
    CL = Math.trunc( L / 0.473);
    CX = Math.trunc( CL / 6);
    GD = CL * 110;
    IM = IM + GD;

    //DISTRIBUCION BINOMIAL DE EL PROCESO A UTILIZAR
    u = metodoCongruencialMult();

    if( u <= 0.13 ){                // --> PROCESO SIGMATEC
       
        procesoSigmatec();
    }
    else if( u <= 0.40 ){           // --> PROCESO COLD CONTACT
      
        procesoColdContact();
    }
    else if( u <= 0.65 ){           // --> PROCESO DESTILACION
      
        procesoDestilacion(); 
    }
    else if( u <= 0.84 ){           // --> PROCESO DESTILACION AL VACIO
      
       procesoDestilacionVacio();
    }
    else{                           // --> PROCESO PELICULA AL VACIO
       
        procesoPeliculaVacio();
    }


    mostrarRegDiario(1);

}

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

export const modeloParticular = (dias, proceso) => {

    diasArray = [];

    CTL = 0; PTL = 0 ; CM = 0 ; IM = 0 ; GN = 0 ;
    CS = 0 ; CC = 0 ; CDS = 0 ; CDV = 0 ; CPV = 0 ;     
    CTS = 0 ; CTC = 0 ; CTD = 0 ; CTDV = 0 ; CTPV = 0 ;     
    CLS = 0 ; CLC = 0 ; CLD = 0 ; CLDV = 0 ; CLPV = 0 ;      

    //SIMULACION DE LOS DIAS SELECCIONADOS

    for(d = 1 ; d <= dias ; d++){
    
        simularDiaParticular(proceso);
    }

    GN = ( IM - CM );

    mostrarRegGeneral(0);

}

const simularDiaParticular = (proceso) => {

    P = 0; GD = 0;

    //DISTRIBUCION UNIFORME DE LA CANTIDAD DE LITROS PRODUCIDOS DIARIOS
    L  = distribucionUniforme(18000, 20000, 0);

    CTL = (CTL + L);
    CL = Math.trunc( L / 0.473);
    CX = Math.trunc( CL / 6);
    GD = CL * 110;
    IM = IM + GD;


    if( proceso == 1 ){                // --> PROCESO SIGMATEC
       
        procesoSigmatec();
    }
    else if( proceso == 2 ){           // --> PROCESO COLD CONTACT
      
        procesoColdContact();
    }
    else if( proceso == 3 ){           // --> PROCESO DESTILACION
      
        procesoDestilacion(); 
    }
    else if( proceso == 4 ){           // --> PROCESO DESTILACION AL VACIO
      
       procesoDestilacionVacio();
    }
    else{                           // --> PROCESO PELICULA AL VACIO
       
        procesoPeliculaVacio();
    }

    mostrarRegDiario(0);

}

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

export const modeloParametrico = (graduacion,costos,temperatura,despLitros,dias) => {

    diasArray = [];

    CTL = 0; PTL = 0 ; CM = 0 ; IM = 0 ; GN = 0 ;
 
  //SIMULACION DE LOS DIAS SELECCIONADOS

    for(d = 1 ; d <= dias ; d++){
        
        simularDiaParametro(graduacion,costos,temperatura,despLitros);
    }

    GN = ( IM - CM );

    mostrarRegGeneral(1);
}

const simularDiaParametro = (graduacion,costos,temperatura,despLitros) => {
    
    P = 0; GD = 0;

    //DISTRIBUCION UNIFORME DE LA CANTIDAD DE LITROS PRODUCIDOS DIARIOS
    L  = distribucionUniforme(18000, 20000, 0);

    CTL = (CTL + L);
    CL = Math.trunc( L / 0.473);
    CX = Math.trunc( CL / 6);
    GD = CL * 110;
    IM = IM + GD;

    //DISTRIBUCION UNIFORME DE LA GRADUACION ALCOHOLICA
    GA = distribucionUniforme(parseFloat(graduacion[0]),parseFloat(graduacion[1]), 1);

    //DISTRIBUCION EXPONENCIAL DE LA CANT. DE LITROS DESPERDICIADOS
    DL = distribucionExponencial(despLitros);

    //DISTRIBUCION UNIFORME DE LA TEMP. DE TRABAJO
    TD = distribucionUniforme(parseFloat(temperatura[0]), parseFloat(temperatura[1]), 0)

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(parseInt(costos[0]), parseInt(costos[1]));

    PTL = ( PTL + DL );
    CM = ( CM + CD );

    mostrarRegDiario(0);

}
//-------------------------------------------------------------------------------------------------------------------------------------------------// 

const procesoSigmatec = () => {

    P = 1;
    CS = CS + 1;

    //DISTRIBUCION UNIFORME DE LA GRADUACION ALCOHOLICA
    GA = distribucionUniforme(0.03, 0.46, 1);
    
    //DISTRIBUCION EXPONENCIAL DE LA CANT. DE LITROS DESPERDICIADOS
    DL = distribucionExponencial(2);

    //DISTRIBUCION NORMAL DE LA TEMP. DE TRABAJO
    TD = distribucionNormal(45.5, 2.5)

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(2992000, 160000);

    PTL = ( PTL + DL );
    CLS = ( CLS + DL );
    CTS = ( CTS + CD );
    CM = ( CM + CD );

}

const procesoColdContact = () => {

    P = 2;
    CC = ( CC + 1 );

    //DISTRIBUCION NORMAL DE LA GRADUACION ALCOHOLICA
    GA = distribucionNormal(0.06, 0.02, 1);

    //DISTRIBUCION EXPONENCIAL DE LA CANT DE LITROS DESPERDICIADOS
    DL = distribucionExponencial(1)

    //DISTRIBUCION UNIFORME DE LA TEMP. DE TRABAJO
    TD = distribucionUniforme(-1,0, 0)

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(2992000, 220000);

    PTL = ( PTL + DL );
    CLC = ( CLC + DL );
    CTC = ( CTC + CD );
    CM = ( CM + CD );

}

const procesoDestilacion = () => {

    P = 3; 
    CDS = ( CDS + 1 );
    DL = 1.3;

    //DISTRIBUCION UNIFORME DE LA GRADUACION ALCOHOLICA
    GA = distribucionUniforme(0.3, 0.5, 1);

    //DISTRIBUCION UNIFORME DE LA TEMP DE TRABAJO
    TD = distribucionUniforme(97, 100, 0);

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(2992000, 100000);

    PTL = ( PTL + DL );
    CLD = ( CLD + DL );
    CTD = ( CTD + CD );
    CM = ( CM + CD );

}

const procesoDestilacionVacio = () => {

    P = 4;
    CDV = ( CDV + 1 );

    //DISTRIBUCION NORMAL DE LA GRADUACION ALCOHOLICA
    GA = distribucionNormal(0.04, 0.02, 1)

    //DISTRIBUCION UNIFORME DE LA CANT. LITROS DESPERDICIADOS
    DL = distribucionUniforme(0.7, 1, 0);

    //DISTRIBUCION UNIFORME DE LA TEMP DE TRABAJO
    TD = distribucionUniforme(50, 60, 0);

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(2992000, 200000);

    PTL = ( PTL + DL );
    CLDV = ( CLDV + DL );
    CTDV = ( CTDV + CD );
    CM = ( CM + CD );

}

const procesoPeliculaVacio = () => {

    P = 5;
    CPV = ( CPV + 1 );
    DL = 0.8;

    //DISTRIBUCION UNIFORME DE LA GRADUACION ALCOHOLICA
    GA = distribucionUniforme(0.02, 0.04, 1);

    //DISTRIBUCION NORMAL DE LA TEMP. DE TRABAJO
    TD = distribucionNormal(35, 5);

    //DISTRIBUCION NORMAL DEL COSTO DIARIO 
    CD = distribucionNormal(2992000, 300000);

    PTL = ( PTL + DL );
    CLPV = ( CLPV + DL );
    CTPV = ( CTPV + CD );
    CM = ( CM + CD );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------// 

const mostrarRegDiario = (valor) => {

    var proceso = '';

    if(P === 1){
        proceso = 'Sistema Sigmatec';
    }
    else if(P === 2){
        proceso = 'Cold Contact';
    }
    else if(P === 3){
        proceso = 'Destilacion';
    }
    else if(P === 4){
        proceso = 'Destilacion al Vacio';
    }
    else{
        proceso = 'Pelicula al Vacio';
    }

    if(valor === 1){

        var dia = {
            nroDia: d,
            procUt: proceso,
            gradAlc: new Intl.NumberFormat("de-DE").format(GA),
            costoDiario: new Intl.NumberFormat("de-DE").format(CD),
            cantLitros: new Intl.NumberFormat("de-DE").format(L),
            cantLatas: new Intl.NumberFormat("de-DE").format(CL),
            cantSX: new Intl.NumberFormat("de-DE").format(CX)
        };
        
        diasArray.push(dia);
    }
    else{

        var diaParticular = {
            nroDia: d,
            gradAlc: new Intl.NumberFormat("de-DE").format(GA),
            costoDiario: new Intl.NumberFormat("de-DE").format(CD),
            tempDiaria: new Intl.NumberFormat("de-DE").format(TD),
            cantLitros: new Intl.NumberFormat("de-DE").format(L),
            cantLatas: new Intl.NumberFormat("de-DE").format(CL),
            cantSX: new Intl.NumberFormat("de-DE").format(CX)
        };

        diasArray.push(diaParticular);
    }
}

const mostrarRegGeneral = (valor) => {

    if(valor !== 1){

        var mes = {

            gananciaNeta: new Intl.NumberFormat("de-DE").format(GN),
            ingresoMensual: new Intl.NumberFormat("de-DE").format(IM),
            costoMensual: new Intl.NumberFormat("de-DE").format(CM),
            cantLitrosTot: new Intl.NumberFormat("de-DE").format(CTL),
    
            cantS: CS,
            cantCC: CC,
            cantD: CDS,
            cantDV: CDV,
            cantPV: CPV,
    
            costoS: new Intl.NumberFormat("de-DE").format(CTS),
            costoCC: new Intl.NumberFormat("de-DE").format(CTC),
            costoD: new Intl.NumberFormat("de-DE").format(CTD),
            costoDV: new Intl.NumberFormat("de-DE").format(CTDV),
            costoPV: new Intl.NumberFormat("de-DE").format(CTPV),
    
            
            cantLitrosS: new Intl.NumberFormat().format(CLS.toFixed(3)),
            cantLitrosCC: new Intl.NumberFormat().format(CLC.toFixed(3)),
            cantLitrosD: new Intl.NumberFormat().format(CLD.toFixed(3)) ,
            cantLitrosDV: new Intl.NumberFormat().format(CLDV.toFixed(3)),
            cantLitrosPV: new Intl.NumberFormat().format(CLPV.toFixed(3))
        };
    }
    else{

        var mes = {

            gananciaNeta: new Intl.NumberFormat("de-DE").format(GN),
            ingresoMensual: new Intl.NumberFormat("de-DE").format(IM),
            costoMensual: new Intl.NumberFormat("de-DE").format(CM),
            cantLitrosTot: new Intl.NumberFormat("de-DE").format(CTL),
            cantLitrosDesp: new Intl.NumberFormat("de-DE").format(PTL)
        };

    }
    
    // Guardo el objeto como un string
    localStorage.setItem('regMensual', JSON.stringify(mes));
    localStorage.setItem('regDiario', JSON.stringify(diasArray));
}