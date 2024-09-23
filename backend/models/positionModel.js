const { model } = require('mongoose')
const { positionSchema } = require('../schemas/positionSchema.js')

const positionModel = new model('position', positionSchema)

module.exports = { positionModel }
