const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/timeseries', require('./timeseries'));
router.use('/heatmap', require('./heatmap'));

module.exports = router;