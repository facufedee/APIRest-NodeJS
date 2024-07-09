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

const crear = async (req, res) => {

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
    

    } catch (error) {
        // Capturar cualquier error y responder con un mensaje adecuado
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos o los datos no son válidos"
        });
    }
    

    
    


//3. Crear el objeto

const articulo = new Articulo(parametros);

try {
    const articuloGuardado = await articulo.save();
    return res.status(200).json({
        status: "success",
        articulo: articuloGuardado,
        mensaje: "Datos guardados"
    });
} catch (error) {
    return res.status(400).json({
        status: "Error",
        mensaje: "No se guardó"
    });
}
}


const listar = async (req, res) => {
    try {
        let articulos = await Articulo.find({}).sort({fecha: -1}).limit(3);
        if (!articulos) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se han encontrado artículos"
            });
        }
        return res.status(200).json({
            status: "Success",
            parametros: req.params.ultimos,
            contador: articulos.length,
            articulos
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error al obtener los artículos"
        });
    }
}



const uno = async(req, res) => {

    try {
         // Recoger un id por la URL
    let id = req.params.id;

    // Buscar el artículo por su ID
   let articulo = await Articulo.findById(id).exec();

        if (!articulo) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se ha encontrado el artículo"
            });
        }   

        return res.status(200).json({
            status: "success",
            articulo
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error al buscar el artículo"
        });
    }
   
 }


module.exports={
    prueba, 
    curso,
    crear,
    listar,
    uno
}