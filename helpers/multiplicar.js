const fs = require('fs');
const colors = require("colors")

//Se puede usar export
const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = ""

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${i * 5}\n`
        }

        if (listar) {
            console.log("=============================".white);
            console.log(`-------- TABLA DEL ${colors.blue(base)} --------`,);
            console.log("=============================".white);
            console.log(salida.rainbow);
        }

        // Si no se especifica el path va a tomar como base la ruta donde se este ejecutando el archivo

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `Tabla ${base}.txt`

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivoTabla
}