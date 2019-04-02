const mongoose = require('mongoose');
const auth = require('../auth');
const router = require('express').Router();

const Heatmaps = mongoose.model('Heatmaps');

router.get('/', auth.optional, (req, res, next) => {
  return Heatmaps.find({})
    .then(hm => res.json({ data: hm }))
    .catch(err => res.json({ msg: err }).status(404));
});

module.exports = router;