const mongoose = require('mongoose');

const { Schema } = mongoose;

const HeatmapSchema = new Schema({
  id: String,
  outtime: String,
  heat: Array
});

mongoose.model('Heatmaps', HeatmapSchema);