const { model } = require('mongoose');
const { holdingSchema } = require('../schemas/holdingSchema.js');

const holdingModel = new model("holding", holdingSchema);

module.exports = { holdingModel };