const createMongoClient = require('../shared/mongo');

module.exports = async function(context, req) {
    const palestrante =  req.body || {};

    if (palestrante) {
        context.res = {
            status: 400,
            body: 'Palestrante is required!',
        };
    }

    const { client: MongoClient } = await createMongoClient();
    const Palestrantes = MongoClient.collection('palestrantes');

    try {
        const palestrantes = await Palestrantes.insert(palestrante);
        context.res = { status: 201, body: palestrantes.ops[0] };
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error on insert Palestrante',
        };
    }
};