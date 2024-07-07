const validator = require("validator")
const Articulo = require("../modelos/Articulo");


const prueba = (req, res) =>{

    return res.status(200).json({
        mensaje : "Soy una accion de prueba en mi controlador de articulos"
    })
}

const curso = (req, res)=>{
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
    };

const crear = (req, res) => {

    // 1.recoger parametros por post para guardar en la db

    let parametros = req.body;
    // 2. validar los datos 

    try {
        // Validar título
        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
                             validator.isLength(parametros.titulo, { min: 5 });
    
        // Validar contenido
        let validar_contenido = !validator.isEmpty(parametros.contenido);
    
        // Si alguno de los campos no cumple con las validaciones, lanzar un error
        if (!validar_titulo || !validar_contenido) {
            throw new Error("Datos incompletos o inválidos");
        }
    
        // Si se llega hasta aquí, significa que los datos son válidos y se puede proceder
        // con el resto del código
    
        // Por ejemplo:
        // Guardar los datos en la base de datos, responder al cliente, etc.
    
        return res.status(200).json({
            status: "success",
            mensaje: "Datos recibidos correctamente"
        });
    
    } catch (error) {
        // Capturar cualquier error y responder con un mensaje adecuado
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos o los datos no son válidos"
        });
    }
    

    
    


//3. Crear el objeto
// 4. asignar los paramtros al objeto
// 5. Guardar en la base de datos
//6. devolver resultado 
}


module.exports={
    prueba, 
    curso,
    crear
}