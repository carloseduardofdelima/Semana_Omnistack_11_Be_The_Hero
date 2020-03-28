const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({ id });

    },

    async list(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents')
        //Dá join do incidente com sua respectiva ong
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
    ]);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },

    async delete(req, res) {
        //Pegando o id do incident
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        //pegando a ong que criou esse incident
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        //Se a ong que pediu pra deletar for diferente da ong que está associada ao incident, a requisição não é autorizada
        if(incident.ong_id != ong_id) {
            return res.status(401).json({
                error: 'Operation not permitted'
            })
        }

        //Caso seja permitido, ele deleta retornando nada
        await connection('incidents').where('id', id).delete();

        return res.status(204).send();


    }


}