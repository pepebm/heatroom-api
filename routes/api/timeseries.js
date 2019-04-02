const mongoose = require('mongoose');
const auth = require('../auth');
const router = require('express').Router();

const Timeseries = mongoose.model('Timeseries');

router.get('/', auth.optional, (req, res, next) => {
  return Timeseries.find({})
    .then(tm => res.send(tm))
    .catch(err => res.send(err).status(404));
});

module.exports = router;