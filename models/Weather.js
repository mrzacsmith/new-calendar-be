const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema(
  {
    city: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Weather', WeatherSchema)
