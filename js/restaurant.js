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


function calcularAdicionalesPorTodo(reserva) {
    let adicionalesHorarios = 0;
    let adicionalesFinDeSemanas = 0;

    // console.log(reserva)
    if (reserva.horario.getHours() >= 13 && reserva.horario.getHours() <= 14 || reserva.horario.getHours() >= 20 && reserva.horario.getHours() <= 21) {
        // console.log(reserva.horario.getHours())
        let calculoAdicionalHorario = reserva.precioBase() * 0.05;
        adicionalesHorarios = calculoAdicionalHorario;
        // console.log(calculoAdicionalHorario)
        // console.log(adicionalesHorarios)
    }
    if (reserva.horario.getDay() === 5 || reserva.horario.getDay() === 6 || reserva.horario.getDay() === 7) {
        let calculoAdicionalFinDe = reserva.precioBase() * 0.1;
        adicionalesFinDeSemanas = calculoAdicionalFinDe;
        // console.log(calculoAdicionalFinDe)
        // console.log(adicionalesFinDeSemanas)
    }
    let totalAdicionales = adicionalesHorarios + adicionalesFinDeSemanas;
    // console.log(totalAdicionales)
    return totalAdicionales
}

function descuentoPorTodo(reserva) {
    let descuentoCantidadPersonas = 0;
    let descuentoCodigo = 0;
    let totalDescuentos = 0;

    if (reserva.cantidadDePersonas >= 4 && reserva.cantidadDePersonas <= 6) {
        descuentoCantidadPersonas = reserva.precioBase() * 0.05;
    }
    else if (reserva.cantidadDePersonas >= 7 && reserva.cantidadDePersonas < 8) {
        descuentoCantidadPersonas = reserva.precioBase() * 0.1;
    }
    else if (reserva.cantidadDePersonas >= 8) {
        descuentoCantidadPersonas = reserva.precioBase() * 0.15;
    }
    if (reserva.codigoDeDescuento === 'DES15') {
        descuentoCodigo = reserva.precioBase() * 0.15;
    }
    else if (reserva.codigoDeDescuento === 'DES200') {
        descuentoCodigo = 200;
    }
    else if (reserva.codigoDeDescuento === 'DES1') {
        descuentoCodigo = reserva.precioPorPersona;
    }
    totalDescuentos = descuentoCantidadPersonas + descuentoCodigo;
    // console.log(reserva)
    // console.log(totalDescuentos)
    return totalDescuentos
}

// descuentoPorTodo();


Reserva.prototype.precioFinal = function () {
    // console.log(this)
    let precioFinalTotal = this.precioBase() + calcularAdicionalesPorTodo(this) - descuentoPorTodo(this);
    return precioFinalTotal;
}

let reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');
let reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");