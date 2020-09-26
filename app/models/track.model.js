let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let track = new Schema({
  nombre: { type: String, required: true },
  artista: { type: Object, required: true },
  album: { type: String },
  url: { type: String, required: true },
  img: { type: Array, required: true },
  id: { type: String, required: true },
});

module.exports = mongoose.model("Track", track);
