const mongoose = require("mongoose");


const conexion = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mi_blog");
        console.log("Conectado correctamente!");
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    conexion
}
