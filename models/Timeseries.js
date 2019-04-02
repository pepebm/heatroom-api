const mongoose = require('mongoose');

const { Schema } = mongoose;

const TimeseriesSchema = new Schema({
  id: String,
  outtime: String,
  avgCount: Number
});

mongoose.model('Timeseries', TimeseriesSchema);