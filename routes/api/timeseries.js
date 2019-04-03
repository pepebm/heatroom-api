const mongoose = require('mongoose');
const auth = require('../auth');
const router = require('express').Router();

const Timeseries = mongoose.model('Timeseries');

router.get('/', auth.optional, (req, res, next) => {
  return Timeseries.find({}).limit(50)
    .then(tm => res.json({ data: tm }))
    .catch(err => res.json({ msg: err }).status(404));
});

module.exports = router;