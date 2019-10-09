var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function (horarioReservado) {
    this.horarios = this.horarios.filter(function (horario) {
        return horario !== horarioReservado;
    })
    // this.horarios=arregloHorariosFiltrados;
    // for (var i = 0; i < this.horarios.length; i++) {
    //     if (this.horarios[i] === horarioReservado) {
    //         this.horarios.splice(i, 1);
    //         return;
    //     }
    // }
}

Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

function sumatoria(numeros) {
    if (numeros === 0) {
        return 0;
    }
    return numeros.reduce((a, b) => a + b);
}

function promedioEjemplo(numeros) {
    return sumatoria(numeros) / numeros.length;
}

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length) {
        let puntuacion = promedioEjemplo(this.calificaciones);

        // console.log(this)
        // console.log(promedio)
        // console.log(Math.round(promedio))
        return Math.round(puntuacion);

    }
    return 0;
}

let Reserva = function (horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}
Reserva.prototype.precioBase = function () {
    var calculo = this.cantidadDePersonas * this.precioPorPersona
    return calculo
}
Reserva.prototype.precioFinal = function () {
    let adicionalesHorarios = 0;
    let adicionalesFinDeSemanas = 0;
    let descuentoCantidadPersonas = 0;
    let calculoDescuentoPersonas=0;
    // console.log(this.horario)
    if (this.horario.getHours() > 13 && this.horario.getHours() < 14 || this.horario.getHours() > 20 && this.horario.getHours() < 21) {
        // console.log(this.horario.getHours())
        let calculoAdicionalHorario = this.precioBase() * 0.05;
        adicionalesHorarios = calculoAdicionalHorario;
        // console.log(calculoAdicionalHorario)
        // console.log(adicionalesHorarios)
    }
    if (this.horario.getDay() === 5 || this.horario.getDay() === 6 || this.horario.getDay() === 7) {
        let calculoAdicionalFinDe = this.precioBase() * 0.1;
        adicionalesFinDeSemanas = calculoAdicionalFinDe;
        // console.log(calculoAdicionalFinDe)
        // console.log(adicionalesFinDeSemanas)
    }

    let totalAdicionales = adicionalesHorarios + adicionalesFinDeSemanas;
// console.log(this.cantidadDePersonas)
    // if (this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6) {
    //     calculoDescuentoPersonas = this.precioBase * 0.05;
    //     descuentoCantidadPersonas = calculoDescuentoPersonas;
    // } 
    // else if (this.cantidadDePersonas >= 7 && this.cantidadDePersonas < 8) {
    //     calculoDescuentoPersonas = this.precioBase * 0.1;
    //     descuentoCantidadPersonas = calculoDescuentoPersonas;
    // } 
    // else if (this.cantidadDePersonas >= 8) {
    //     calculoDescuentoPersonas = this.precioBase * 0.15;
    //     descuentoCantidadPersonas = calculoDescuentoPersonas;
    // }
    let precioFinalTotal = this.precioBase() + totalAdicionales - descuentoCantidadPersonas;
    return precioFinalTotal;
}

let reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');
let reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");