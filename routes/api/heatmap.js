const mongoose = require('mongoose');
const auth = require('../auth');
const router = require('express').Router();

const Hm05m = mongoose.model('Hm05m');

router.get('/', auth.optional, (req, res, next) => {
  return Hm05m.find({})
    .then(hm => res.send(hm))
    .catch(err => res.send(err).status(404));
});

module.exports = router;