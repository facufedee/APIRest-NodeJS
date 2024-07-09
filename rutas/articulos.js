const {Router} = require("express")
const router = Router();

const ArticuloController = require("../controladores/Articulo")
//rutas de prueba
router.get("/ruta-de-prueba", ArticuloController.prueba);
router.get("/curso", ArticuloController.curso);
router.get("/articulos", ArticuloController.listar);
router.get("/articulos/:ultimos?", ArticuloController.listar);
router.get("/articulo/:id", ArticuloController.uno);



router.post("/crear", ArticuloController.crear);

module.exports= router;