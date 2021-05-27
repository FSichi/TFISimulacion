
export const metodoCongruencialMult = () => {


    //GENERADOR DE NUMERO RANDOM ALEATORIO ENTRE 1 Y 1000000

    const generarRandom = (max, min) => {
 
        return numero = Math.floor( (Math.random() * (max - min + 1)) + min );
    }

    //VARIABLES

    var array = [];

    var semilla = generarRandom(1000000,1);
    var constMult = generarRandom(1000000,1);
    var modulo = generarRandom(1000000,1);

    var arrayN = [];
    var ultimoN = 0;
    var numero = 0;

    //GENERO 100 NUMEROS RANDOM CON EL METODO CONGRUENCIAL MULTIPLICATIVO
    for(var i = 0 ; i < 100 ; i++){

        if(i!== 0){
            ultimoN = arrayN [arrayN.length-1];
            var n = Math.trunc( (constMult * ultimoN ) % modulo );
            arrayN.push(n);
    
            var u = n / modulo ; 
            u = parseInt(u * 1000 ) / 1000
          /*   u = u.toFixed(3); */
            array.push(u);
        }
        else{
            var n = Math.trunc( (constMult * semilla ) % modulo );
            arrayN.push(n);
    
            var u = n / modulo ; 
            
            u = parseInt(u * 1000 ) / 1000
            /* u = u.toFixed(3); */
            
            array.push(u);
        }
    }

    //SELECCIONO DE LOS 100 NUMEROS PSEUDOALEATORIOS UN NUMERO AL AZAR DE ENTRE TODOS ELLOS. 
    var indice =  Math.floor(Math.random()*(array.length));
    return numero = array[indice];

}

export const distribucionUniforme = (min, max, p) => {
   
    var u = metodoCongruencialMult();
    var numero = ( min + (max - min) * u );

    if(p === 1){
        numero = numero.toFixed(4);
    }

    return numero;

}

export const distribucionExponencial = (valor, p) => {

    var u = metodoCongruencialMult();

    var numero = ( - valor *  Math.log(u));

    if(p === 1){
        numero = numero.toFixed(4);
    }

    return numero;

}

export const distribucionNormal = (m,d,p) => {

    var sum = 0;
    var u = 0;

    for(var i = 0 ; i < 12 ; i++){
        u = metodoCongruencialMult();
        sum = sum + u;
    }

    var x = d * (sum - 6) + m;

    if(p === 1){
        x = x.toFixed(4);
    }

    return x;

}


