var expect = chai.expect;
/*Test de la función reservarHorario(horario)*/
describe('Test de la función reservarHorario(horario)', function () {
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual', function () {
        listadoDeRestaurantes[0].reservarHorario('12:00');
        let horariosEsperado = listadoDeRestaurantes[0].horarios;
        expect(horariosEsperado).to.eql(["13:00", "15:30", "18:00"])
    });
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual', function () {
        listadoDeRestaurantes[0].reservarHorario();
        let horariosEsperado = listadoDeRestaurantes[0].horarios;
        expect(horariosEsperado).to.eql(["13:00", "15:30", "18:00"])
    });
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo', function () {
        listadoDeRestaurantes[0].reservarHorario('18:00');
        let horariosEsperado = listadoDeRestaurantes[0].horarios;
        expect(horariosEsperado).to.eql(["13:00", "15:30"])
    });
});

// Testeá la función obtenerPuntuación()
describe('Testeá la función obtenerPuntuación()', function () {
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente', function () {
        var puntuacionEsperada = listadoDeRestaurantes[0].obtenerPuntuacion();
        expect(puntuacionEsperada).to.be.equal(7.4);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0', function () {
        listadoDeRestaurantes[0].calificaciones = [];
        var puntuacionEsperada = listadoDeRestaurantes[0].obtenerPuntuacion();
        expect(puntuacionEsperada).to.be.equal(0);
    })

})

// Testeá la función calificar()
describe('Testeá la función calificar()', function () {
    it('Cuando se califica un restaurant y su valor es menos que 0, no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(-1);
        var calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant y su valor es mayor a 10, no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(15);
        var calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant, y su calificación  es nulo y no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(' ');
        var calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant, se agrega la calificacion al arreglo', function () {
        listadoDeRestaurantes[1].calificar(5);
        var calificacionesEsperada= listadoDeRestaurantes[1].calificaciones;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.eql([7, 7, 3, 9, 7, 5]);
    })
})