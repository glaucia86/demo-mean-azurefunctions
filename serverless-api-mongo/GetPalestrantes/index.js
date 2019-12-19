const createMongoClient = require("../shared/mongo");

module.exports = async context => {
    const { client: MongoClient, closeConnectionFn } = await createMongoClient();

    const Palestrantes = MongoClient.collection("palestrantes");

    const res = await Palestrantes.find({});
    const body = await res.toArray();

    closeConnectionFn();
    context.res = { 
        status: 200, 
        body, 
    };
};
