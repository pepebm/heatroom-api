const mongoose = require('mongoose');

const { Schema } = mongoose;

const HeatmapSchema05 = new Schema({
  id: String,
  outtime: String,
  heat: Array
}, { collection: 'hm05m' } );

const HeatmapSchema60 = new Schema({
  id: String,
  outtime: String,
  heat: Array
}, { collection: 'hm60m' });

// Model for updates every 05min
mongoose.model('Hm05m', HeatmapSchema05);
// Model for updates every 60min
mongoose.model('Hm60m', HeatmapSchema60);