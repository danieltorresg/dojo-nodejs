const Track = require("../models/track.model.js");
const trackService = require("../services/spotify/spotify.service.js");

function getTrack() {}

async function createTracks() {
  let track = new Track();
  let cancion = await tracksTest(req.query.cancion);
  track.nombre = cancion.name;
  track.artista = cancion.artista;
  track.album = cancion.album;
  track.url = cancion.url;
  track.id = cancion.id;
  track.img = cancion.img;

  let saveTrack = await track
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
}

async function findAllTracks(req, res) {
    let h = await Track.find()
    .then((data) => res.send(data))
    .catch((err) => {
        res.status(500).send({
            message: err.message || "Error returning tracks",
        })
    })
}

module.exports={
    findAllTracks: findAllTracks,
    createTracks: createTracks,
}