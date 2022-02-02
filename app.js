// FileSystem
const argv = require('./config/yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
require("colors")

console.clear();
console.log(argv);


crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.magenta, "creado".blue))
    .catch(err => console.log(err).red)

