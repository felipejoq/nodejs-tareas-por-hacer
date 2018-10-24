
const colors = require('colors');

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(colors.red('==========================='));
        for (let tarea of listado) {
            console.log(colors.green('=========  TAREA  ========='));
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log(colors.green('==========================='));
        }
        console.log(colors.red('==========================='));

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        actualizado ? console.log('Actualizada con éxito :)') : console.log('No actualizada :(');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        borrado ? console.log('La tarea fue borrada con éxito') : console.log('Error al borrar la tarea.');;
        break;
    default:
        console.log('El comando no es reconocido.');
        break;
}