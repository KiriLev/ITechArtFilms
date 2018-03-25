const router = require('express').Router();

const controller = require('./controllers/films');

router.get('/api/films/', controller.getFilms);
router.get('/api/films/:id', controller.getFilm);


module.exports = router;
