var expect= chai.expect;
/*Test de la función reservarHorario(horario)*/
describe('Test de la función reservarHorario(horario)',function(){
    it('Cuando se agregue horario se elimine del arreglo', function(){
        listadoDeRestaurantes[0].reservarHorario('18:00');
        let horariosEsperado = listadoDeRestaurantes[0].horarios; 
        expect(horariosEsperado).to.eql(["13:00", "15:30"])
    })
})