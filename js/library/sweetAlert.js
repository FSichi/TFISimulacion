
//Funciona con promesas. 

// const {value: nombreDeVariable} = ...


(async () => {

    const {value: organo }  = await Swal.fire({

        title: 'Acepta todas las cookies y acepta ir a la trata de persona!!',
        text: 'simple texto',
        // html: '<b class = "clasecss">Texto que podemos edita </b>',
        footer:'Te secuestramos a domicilio',
        icon: 'question',
        confirmButtonText:'DONAR HIGADO',
        width: '50%',
        padding: '1rem',
        background:'#f1f1f1',
        timer: 50000,
        timerProgressBar:true,
        allowOutsideClick:false,
        allowEscapeKey : false,
        allowEnterKey: false,
    
        input: 'select',
        inputPlaceholder: 'Grupo Sanguineo',
        inputValue: '',
        inputOptions: {
            RHp: 'RH+',
            Op: 'O+',
            On: 'O-',
            An: 'A-',
            Ap: 'A+',
            
        },
        
        
        // title:  Titulo de la alerta,
        // text: Simple texto,
        // html:  Es un reemplazo de la etiqueta text,Permite reemplazar texto por contenido que queramos de html
        // icon:  Agregar iconos. puede ser  'error', 'succes', 'warning', 'info', 'question'
        // confirmButtonText: Boton de confirmacion --> Lo que esta entre comillas es el texto que tendra el boton
        // footer: Pie de la alerta --> Podemos usar etiquetas html como la misma propiedad.
        // width: Ancho de tamaño del alert --> No es recomendable trabajar con px u otras unidades, sino con % --> Ej 90%.
        // padding: rellenos entre el dinal del texto y el borde. Se suele usar unidad rem.
        // background: Color de fondo del Alert
        // grow:  cambiar el tamaño del alert --> para utilizarlo comentamos el width --> Ej de valores :  'fullscreen', 'row', 'column'
        // backdrop: Fondo detras del alert para oscurecer contenido. --> Valores : true, false
        // timer: Tiempo antes de cerrarse, --> Valores en ms
        // timerProgressBar: Muestra una barra con el tiempo que queda del alert. --> Valores: true o false
        // toast: Tipo de notificacion.  --> true para alertas mas peques
        // position: Posicion del alert --> Valores: top, bottom , bottom-end, bottom-start, top-start, top-end, center.
        // allowOutsideClick: Permitir que el alert se cierre si el usuario hace click fuera de ella.
        // allowEscapeKey: Permitir que el alert se cierre si presiono la tecla Esc.
        // allowEnterKey: Permitir que el alert se cierre si presiono la tecla Enter
        // stopKeydownPropagation: : (para la propagacion, los eventos de teclado de la pagina quedan detenidos)Por defecto se recomienda utilizar false. 
    
        // input:  Para permitir ingresar un campo --> Valores 'text', 'number', select
        // inputPlaceholder: Texto tipo hint
        // inputValue: Valor del campo del input
        // inputOptions: Para recibir objetos. --> Ej  inputOptions : { argentina : 'Argentina', mexico : 'Mexico'}
        
/*           customClass: {  Agregar nuestras propias clases a los elemetnos del alert para agregarles css.
                container:
                popup:  'nombreDeClaseCSS'
                header:
                title:
                closeButton:
                icon:
                image:
                content:
                input:
                actions:
                confirmButton:
                cancelButton:
                footer:	   
            }  */
         	
        // showConfirmButton:  Muestra o no el boton de confirmacion
        // confirmButtonColor: Color del boton de confirmacion hexa10
        // confirmButtonAriaLabel: Propiedad que sirve para usuarios especiales, descripcion de lo que ahce el boton Confirm.
    
        // showCancelButton: Mostrar un boton de Cancelar
        // cancelButtonText: Texto del boton de Cancelar
        // cancelButtonColor: Color del boton de Cancelar
        // cancelButtonAriaLabel: Propiedad que sirve para usuarios especiales, descripcion de lo que ahce el boton Cancel.
        
        // buttonsStyling:  Utilizar estilos css de sweet alert por defecto. --> True o False. 
        // showCloseButton: Mostrar boton de cerrar Alert
        // closeButtonAriaLabel: Propiedad que sirve para usuarios especiales, descripcion de lo que hace el boton. (accesibilidad)
    
    
        // imageUrl: Agrega Imagen desde una URL dentro del proyecto o pagina web.
        // imageWidth: Ancho de la Imagen --> Se trabaja con px.
        // imageHeight: Alto de la imagen --> Se trabaja con px.
        // imageAlt: Texto alternativo ( para el SEO. Posiciomiento de Google)
    
        
    });

    if(organo){

        Swal.fire({

            title: 'Donacion completada',
            html: `${organo}`,
            icon: 'success',
            footer:'Lo siguiente son los pulmones total tenes 2',

        })
    }

})()

