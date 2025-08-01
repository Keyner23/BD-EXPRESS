import mysql from "mysql2"
import express from "express"

const conexion=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"bd_riwi"
})

conexion.connect((error)=>{
    if(error) throw error
    console.log("se conecto con exito")
})