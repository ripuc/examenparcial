const {Router,response}=require('express');
const {check}=require('express-validator');
const Producto= require('../modelo/producto');
const router = Router();

router.post('/create',async (req, res = response) =>{
    try {
            const producto = new Producto(req.body);
            await producto.save();
            res.json({
                response:"ok",
                message: 'producto registrado correctamente'

            });
        } catch (error) {
            res.json({
                ok:false,
                menssage:'Ocurrio un error inesperado'
            });
        }
});
router.get('/',async (req, res = response) => {
    try {
    const productos = await Producto
    //Para buscar un id en especifico
    //.find({_id:'60904fe0af7c7e053c3c0d12'})
    .find()
    .limit(10)

    res.json({
        response:"ok",
        productos,
        menssage:"producto encontrado"
    });
} catch (error) {
    res.json({
        ok:false,
        menssage:'Ocurrio un error inesperado'
    });
}
    
});

module.exports=router