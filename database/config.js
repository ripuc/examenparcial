const mongoose=require('mongoose');
const dbConn = async() =>{

    try {
        await mongoose.connect(process.env.DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la bd');

        
    }
}

module.exports={dbConn};