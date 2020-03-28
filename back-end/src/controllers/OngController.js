const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
         //Desestruturando os dados recebidos
    const { name, email, whatsapp, city, uf } = req.body;

    //Cria uma id mais complexa para cada ong
    //Se fosse auto_increment seria muito fácil descobrir
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return res.json({ id });
    },
    
    async list(req, res) {
        const ongs = await connection('ongs').select('*');
        
        return res.json(ongs);
    }
}