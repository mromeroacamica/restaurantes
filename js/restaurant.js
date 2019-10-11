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