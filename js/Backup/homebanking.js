//Declaración de variables
var nombreUsuario = "Horacio Yniguez";
var saldoCuenta = 15000;
var limiteExtraccion = 7000;
var codigoDeSeguridad=12345;

var precioDeServicioAgua = 350;
var precioDeServicioLuz = 210;
var precioDeServicioInternet = 570;
var precioDeServicioTelefono = 425;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cambiarLimiteDeExtraccion = prompt("Ingrese un nuevo límite de extracción:");

    if (cambiarLimiteDeExtraccion == null) {
        alert("No se ingreso el nuevo límite de Extracción.");
    }
    else if (isNaN(cambiarLimiteDeExtraccion)) {
        alert("Ingresa solo el monto.");
    }
    else {
        limiteExtraccion = parseInt(cambiarLimiteDeExtraccion);
        alert("El nuevo límte de extraccón es: $" + limiteExtraccion);
        actualizarLimiteEnPantalla();



    }
}

function extraerDinero() {
    var extraerDinero = prompt("Ingrese la cantidad de dinero a extraer:");


    if (extraerDinero == null) {
        alert("No se ingreso monto para extraer.");
    }
    else {
        dineroExtraido = parseInt(extraerDinero);


        if (dineroExtraido > saldoCuenta) {
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
        }
        else if (dineroExtraido > limiteExtraccion) {
            alert("La cantidad que deseas extraer es mayor al límite de extracción.");
        }
        else if (isNaN(dineroExtraido)) {
            alert("ingresa correctamente el monto.");
        }
        else if (extraerDinero % 100 !== 0) {
            alert("Solo puedes extraer billetes de 100.");
        } else if(extraerDinero<0) {
            alert("no puede ingresar negativo");

        }
        else {
            restarDinero(dineroExtraido);
            alert("Has retirado : $" + dineroExtraido + "\n" + "Saldo anterior : $" + (dineroExtraido + saldoCuenta) + "\n" + "Su saldo actual es: $" + saldoCuenta);
            

            actualizarSaldoEnPantalla();
        }
    }
function sumarDinero (cantidad){
    saldoCuenta += cantidad;
    actualizarSaldoEnPantalla();

}

}

function restarDinero(cantidad) {
    saldoCuenta -= cantidad;
    actualizarSaldoEnPantalla();

}

function depositarDinero (dineroADepositar){
    var dineroADepositar = prompt ("Ingrese el Monto a Depositar: ");
    if (dineroADepositar == null) {
        alert ("no ingreso monto a depositar");
    } else {
        dineroADepositar = parseInt (dineroADepositar);

        if (isNaN(dineroADepositar)) {
            alert("ingresar correctamente el monto.");
              
        }

        else if (dineroADepositar < 0) {
            alert("No se puede ingresar numero negativo.");
        }
        else {
           sumarDinero (dineroADepositar);

         //  saldoCuenta += dineroADepositar;
            alert("Has depositado : $" + dineroADepositar + "\n"+ "   saldo anterior : $" + (saldoCuenta - dineroADepositar) + "\n" + "   saldo Actual    : $" + saldoCuenta );
           
            actualizarSaldoEnPantalla();


        }
    }
}

function pagarServicio(servicio, precioDeServicio) {
var servicioAPagar = prompt ("Ingrese el número  que corresponda con el servicio que queres pagar:" + "\n" + "\n" +
"1 - Agua" + "\n" +
"2 - Luz" + "\n" +
"3 - Internet" + "\n" +
"4 - Teléfono" + "\n"
);

if (servicioAPagar == null ) {
    alert("No ingreso ninguna opción.");
} else {
    servicioAPagar = parseInt(servicioAPagar);
    switch (parseInt(servicioAPagar)) {
        case 1:
        
            restarDinero(precioDeServicioAgua);
            alert("Ha pagado el servicio de AGUA " + "\n" + "Saldo anterior: $" + (saldoCuenta + precioDeServicioAgua)  + "\n" + "Dinero descontado: $" + precioDeServicioAgua +"\n" + "Saldo actual: $" + saldoCuenta);

            break;
        case 2:
            restarDinero(precioDeServicioLuz);
            alert("Ha pagado el servicio de LUZ" + "\n" + " Saldo anterior: $" + (saldoCuenta + precioDeServicioLuz) + "\n" + "Dinero descontado: $" + precioDeServicioLuz + "\n" +"Saldo actual: $"+ saldoCuenta);
            break;
        case 3:
            restarDinero( precioDeServicioInternet);
            alert("Ha pagado el servico de INTERNET " + "\n" + "Saldo anterior: $" + (saldoCuenta + precioDeServicioInternet) +"\n" + "Dinero descontado: $" + precioDeServicioInternet + "\n" + "Saldo actual: $"+ saldoCuenta);
            break;
        case 4:
            restarDinero(precioDeServicioTelefono);
            alert("Ha pagado el servico de TELEFONO " + "\n" + "Saldo anterior: $" + (saldoCuenta + precioDeServicioTelefono) +"\n"+ "Dinero descontado: $" + precioDeServicioTelefono + "\n"+ "Saldo actual: $" + saldoCuenta);
            break;
        default:
            alert("No existe el servicio que se ha seleccionado.");
            break;
    }
}
}



function transferirDinero() {
    var cuentaAmiga1 = "1234567";
    var cuentaAmiga2 = "7654321";
   
   
    var montoATransferir = prompt ("Ingrese monto que desea transferir")
    if(montoATransferir> saldoCuenta){
        alert("su saldo no es suficiente para realizar para realizar esta operacion");

    var queCuenta = prompt ("ingrese la cuenta Amiga");
    if (queCuenta === cuentaAmiga1 || queCuenta === cuentaAmiga2) {
        
    }

        
    } else {
        saldoCuenta = saldoCuenta - montoATransferir;
        alert("La transferencia se realizo con exito");
        actualizarLimiteEnPantalla();
    }

   
    
    ///var queCuenta = prompt ("ingrese la cuenta Amiga");
    ///if(queCuenta === cuentaAmiga1 || queCuenta === cuentaAmiga2 ){
    //var montoATransferir = prompt( "ingrese monto que desea Transferir")
        

//else if (parseInt(queCuenta) !== cuentaAmiga1 ||parseInt(queCuenta) !==  cuentaAmiga2) {
   // alert ("La cuenta no es amiga, no puede trasnferir");

}    
  //  montoATransferir = parseInt(montoATransferir);
  //  if (isNaN (montoATransferir)) {
  //      alert("Ingrese correctamente el monto");

  //  }
    

  //function transferenciaMayorASaldo (){
   //   if(montoATransferir> saldoCuenta){
   //       alert("su saldo no es suficiente para realizar para realizar esta operacion");
          
   //   } else {
     //     saldoCuenta = saldoCuenta - montoATransferir;
     //     alert("La transferencia se realizo con exito");
    //      actualizarLimiteEnPantalla();

      
  
   
     
   

function iniciarSesion() 
{
    var codigoIngresado = Number(prompt('Ingrese el código de seguridad de su cuenta'));
    if (codigoIngresado !=codigoDeSeguridad)
    { 
        alert("Codigo Incorrecto" + "\n"+ "Su dinero ha sido retenido");
        saldoCuenta=0;
        actualizarSaldoEnPantalla();

    } 
    else 
    {
        (codigoIngresado === codigoDeSeguridad)
        alert ("Bienvenido a su Home Banking " + nombreUsuario + "\n" + " ya puede comenzar a realizar operaciones");
    }

    
                
}

iniciarSesion();




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}





