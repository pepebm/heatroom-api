const mongoose = require('mongoose');
const auth = require('../auth');
const router = require('express').Router();

const Hm05m = mongoose.model('Hm05m');

router.get('/', auth.optional, (req, res, next) => {
  return Hm05m.find({}).sort({ outtime: -1 }).limit(1)
    .then(hm => res.json({ data: hm }))
    .catch(err => res.json({ msg: err }).status(404));
});

module.exports = router;