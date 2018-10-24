const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'True: Tarea completada False: si aun no.'
}

const opcionesCrear = {
    descripcion
}
const opcionesActualizar = {
    descripcion,
    completado
}
const opcionesBorrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Añade una tarea por hacer', opcionesCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', opcionesActualizar)
    .command('borrar', 'Borrar una tarea de la lista de por hacer', opcionesBorrar)
    .help()
    .argv;

module.exports = {
    argv
}