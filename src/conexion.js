import mysql from "mysql2"
import express from "express"

const conexion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "TuNuevaContraseñaSegura",
    database: "bd_riwi"
})

const app = express()


app.get("/clientes", (req, resp) => {
    resp.json({
        nombre: "keyner",
        apellido:"barrios"
    })
})

app.listen(3000, (error) => {
    if (error) {
        console.error("Error al iniciar el servidor:", error.message);
        return;
    }
    console.log("api se levanto correctamente");
});


conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error.message);
        return;
    }
    console.log("se conecto con exito");
});
