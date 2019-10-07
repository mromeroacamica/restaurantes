var expect= chai.expect;
/*Test de la función reservarHorario(horario)*/
describe('Test de la función reservarHorario(horario)',function(){
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual', function(){
        listadoDeRestaurantes[0].reservarHorario('12:00');
        let horariosEsperado = listadoDeRestaurantes[0].horarios; 
        expect(horariosEsperado).to.eql(["13:00", "15:30", "18:00"])
    });
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual', function(){
        listadoDeRestaurantes[0].reservarHorario();
        let horariosEsperado = listadoDeRestaurantes[0].horarios; 
        expect(horariosEsperado).to.eql(["13:00", "15:30", "18:00"])
    });
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo', function(){
        listadoDeRestaurantes[0].reservarHorario('18:00');
        let horariosEsperado = listadoDeRestaurantes[0].horarios; 
        expect(horariosEsperado).to.eql(["13:00", "15:30"])
    });
});

// Testeá la función obtenerPuntuación()
describe('Testeá la función obtenerPuntuación()', function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente', function(){
        
    })

})