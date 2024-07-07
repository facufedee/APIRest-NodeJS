const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

conexion();
console.log();

//creamos servidor en node 

const app = express();
const puerto = 3900;

//configurar cors Se ejecuta el middleware antes de que llegue a la ruta (?)

app.use(cors()); 
//convertir body a objeto js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//RUTAS
const rutas_articulo = require("./rutas/articulos");

app.use("/api", rutas_articulo);


//crear rutas
app.get("/probando", (req, res)=>{
    return res.status(200).json([
        {
            curso: "Master en Backend!",
            profesor: "Facundo Flores"
        },   
        {
            curso: "Master en Backend!",
            profesor: "Facundo Flores"
        }]
       );
    });

    app.get("/", (req, res)=>{
        return res.status(200).send('<h1>FACUNDO FEDERICO FLORES ZAMORANO</h1>');
        });



//crear el servidor y escuchar peticiones http
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el port:"+puerto);
})









