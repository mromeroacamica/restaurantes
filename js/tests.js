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
        let puntuacionEsperada = listadoDeRestaurantes[0].obtenerPuntuacion();
        expect(puntuacionEsperada).to.be.equal(7);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0', function () {
        listadoDeRestaurantes[0].calificaciones = [];
        let puntuacionEsperada = listadoDeRestaurantes[0].obtenerPuntuacion();
        expect(puntuacionEsperada).to.be.equal(0);
    })

})

// Testeá la función calificar()
describe('Testeá la función calificar()', function () {
    it('Cuando se califica un restaurant y su valor es menos que 0, no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(-1);
        let calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant y su valor es mayor a 10, no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(15);
        let calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant, y su calificación  es nulo y no se modifica el arreglo', function () {
        listadoDeRestaurantes[1].calificar(' ');
        let calificacionesEsperada= listadoDeRestaurantes[1].calificaciones.length;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.equal(5);
    });
    it('Cuando se califica un restaurant, se agrega la calificacion al arreglo', function () {
        listadoDeRestaurantes[1].calificar(5);
        let calificacionesEsperada= listadoDeRestaurantes[1].calificaciones;
        // console.log(calificacionesEsperada);
        expect(calificacionesEsperada).to.be.eql([7, 7, 3, 9, 7, 5]);
    })
})

//Testeá la función buscarRestaurante(id)
describe('Testeá la función buscarRestaurante(id)', function(){
    it('Cuando se busca un restaurant que no existe, Listado muestra mensaje', function(){
        let busquedaEsperada = listado.buscarRestaurante(0)
        // console.log(ListadoEsperado);
        expect(busquedaEsperada).to.be.equal('No se ha encontrado ningún restaurant')
    });
    it('Cuando se busca un restaurant null, Listado muestra mensaje', function(){
        let busquedaEsperadaNula = listado.buscarRestaurante(' ')
        // console.log(ListadoEsperado);
        expect(busquedaEsperadaNula).to.be.equal('No se ha encontrado ningún restaurant')
    });
    it('Cuando se busca un restaurant, Listado lo muestra', function(){
        let busquedaEsperadaCorrecta = listado.buscarRestaurante(1)
        // console.log(ListadoEsperado);
        expect(busquedaEsperadaCorrecta).to.be.eql(listadoDeRestaurantes[0])
    })
})

//Testeá la función obtenerRestaurantes() Testeá la función obtenerRestaurantes() para comprobar su funcionamiento. En este paso, podés elegir vos la pruebas que quieras hacer.
describe('Testeá la función obtenerRestaurantes()', function(){
    it('Testea el filtro Rubro null no afecte al filtro de restaurantes', function(){
        let listadoFiltaradoRubroNull=listado.obtenerRestaurantes(null, null, null);
        expect(listadoFiltaradoRubroNull).to.eql(listado.restaurantes)
    });
    it('Testea el filtro Rubro cuando asume un valor y lo filtra según dicho valor, manteniendo null los otros dos parametros', function(){
        let listadoFiltaradoRubroPasta=listado.obtenerRestaurantes("Pasta", null, null);
        expect(listadoFiltaradoRubroPasta).to.eql([listadoDeRestaurantes[6], listadoDeRestaurantes[8], listadoDeRestaurantes[14], listadoDeRestaurantes[15], listadoDeRestaurantes[16]])
    });
    it('Testea el filtro Rubro cuando asume un valor y lo filtra según dicho valor, manteniendo null filtroCiudad, y filtroHorario asumir un valor', function(){
        let listadoFiltaradoRubroPasta12hs=listado.obtenerRestaurantes("Pasta", null, '12:00');
        expect(listadoFiltaradoRubroPasta12hs).to.eql([listadoDeRestaurantes[16]])
    });
    it('Testea el filtro Rubro cuando asume un valor y lo filtra según dicho valor, manteniendo null filtroHorario, y filtroCiudad asumir un valor', function(){
        let listadoFiltaradoRubroPasta=listado.obtenerRestaurantes("Pasta", 'Berlín', null);
        expect(listadoFiltaradoRubroPasta).to.eql([listadoDeRestaurantes[16]])
    });
    it('Testea el filtro Rubro cuando asume un valor y lo filtra según dicho valor, filtroHorario y filtroCiudad asuman un valor', function(){
        let listadoFiltaradoRubroPasta=listado.obtenerRestaurantes("Pasta", 'Berlín', '12:00');
        expect(listadoFiltaradoRubroPasta).to.eql([listadoDeRestaurantes[16]])
    });
})