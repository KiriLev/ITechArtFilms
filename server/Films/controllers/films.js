const { Film } = require('../models');


async function getFilms(req, res) {
    const offset = +req.query.offset || 0;
    const limit = +req.query.amount || 5;

    Film.find({}).skip(offset).limit(limit)
        .then((films) => res.status(200).send(films)).catch(res.status(500).send);
}

async function getFilm(req, res) {
    const id = req.params.id;
    Film.findOne({ _id: id })
        .then((film) => res.status(200).send(film)).catch(res.status(500).send);
}


module.exports = {
    getFilm,
    getFilms
}