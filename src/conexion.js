import mysql from "mysql2"
import express from "express"
import cors from "cors"

// aqui creamos la conexion con la base de datos con el motor mysql con sus respectivos 
// parametros dependiendo de tu ordenador

const conexion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "TuNuevaContraseñaSegura",
    database: "bd_riwi"
})

// aqui traemos los frameworks y librerias para poder manejarlos en el navegador
// y para levantar el servidor con express

const app = express()

// este es para que ingrese por cualquier parte del navegador y no tenga conflicto
app.use(cors())





// aqui comenzamos a crear los endpoinst pero con express para ir a consular a la bd 
// y realizar la consulta requerida

app.get("/clientes", (req, resp) => {
    conexion.query("select * from clientes", (error, result) => {
        if (error) throw error

        resp.json(result)
    })
})

app.get("/cuentas", (req, resp) => {
    conexion.query("select * from cuentas", (error, result) => {
        if (error) throw error

        resp.json(result)
    })
})





// aqui usamos un metodo de express para levantar la api en el puerto que deseamos
// y hacemos una sencilla validacion
app.listen(3000, (error) => {
    if (error) {
        console.error("Error al iniciar el servidor:", error.message);
        return;
    }
    console.log("api se levanto correctamente");
});

// para verificar si la conexion es correcta con la bd
conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error.message);
        return;
    }
    console.log("se conecto con exito");
});


// podemos hacerlo de forma modular, pero sera mas adelante, SIGAN VIENDO.