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

}
function sumarDinero (cantidad){
    saldoCuenta += cantidad;
    actualizarSaldoEnPantalla();

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
function transferirACuenta (cuentaATransferir) {
    alert("se han transferido $ "+ montoATransferir + "\n" + "cuenta destino" + cuentaATransferir);
    actualizarLimiteEnPantalla();
}

function transferirDinero() {
    var montoATransferir = prompt("Ingrese el monto que desea transferir:");
    if (saldoCuenta < montoATransferir) {
        alert("No puede transferirse esa cantidad de dinero.");
    } else if (montoATransferir == null || montoATransferir == "") {
        alert("No ingreso monto para la transferencia.");
    } else if (isNaN(montoATransferir)) {
        alert("Ingrese solo el monto.");
    } else {
        var cuentaATransferir = prompt("Ingrese el número de cuenta al que desea transferir el dinero:");
        if (cuentaATransferir == null || cuentaATransferir == "") {
            alert("No ingreso cuenta para la transferencia.");
        } else {
            restarDinero(montoATransferir);
            cuentaATransferir = parseInt(cuentaATransferir);
            switch (cuentaATransferir) {
                case cuentaAmiga1:
                    tranferirACuenta(cuentaAmiga1);
                    break;
                case cuentaAmiga2:
                    tranferirACuenta(cuentaAmiga2);
                    break;
                default:
                    alert("Solo puede transferirse dinero a una cuenta amiga.");
                    break;
            }
        }
    }
}
    
    //var queCuenta = prompt ("Ingrese la Cuenta a la que desea Transferir");
      //  if(parseInt(queCuenta) === cuentaAmiga1 || parseInt(queCuenta)=== cuentaAmiga2) {
    //        montoAtransferir = prompt ("Ingrese saldo a transferir")
                transferenciaMayorSaldo();
    //   }
      // else if (parseInt(queCuenta) !== cuentaAmiga1 || parseInt(queCuenta)!== cuentaAmiga2){
               alert("Solo puede transferir a una cuenta Amiga.");
      //}
//}
 //function transferenciaMayorSaldo (){
   //  if(montoAtransferir >saldoCuenta) {
     //    alert ("Su saldo no es suficiente para realizar esta operacion");
     //} else {
       //  restarDinero (montoATransferir);
        // alert("La transferiencia se realizo con exito");
         //       actualizarSaldoEnPantalla ();

     //}
 //}  

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






