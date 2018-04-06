const { Film } = require('../models');


async function getFilms(req, res) {
    const offset = +req.query.offset || 0;
    const limit = +req.query.amount || 5;
    //console.log(req.session);
    Film.find({}).skip(offset).limit(limit)
        .then((films) => res.status(200).send(films)).catch(res.status(204).send);
}

async function getFilm(req, res) {
    const id = req.params.id;
    Film.findOne({ _id: id })
        .then((film) => res.status(200).send(film)).catch(res.status(204).send);
}


module.exports = {
    getFilm,
    getFilms
}