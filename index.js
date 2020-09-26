const express = require("express");
const app = express();
const uri = require('./app/config/db.config.js');

const mongoose = require('mongoose');
require('./app/routes/spoti.router.js')(app);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

const cors = require('cors');

let corsOptions = {
   origin: "http://localhost:3000"
};
 
app.use(cors(corsOptions));

mongoose.connect(uri, (err, res) => {
 
    if (err) throw err;
    console.log("Base de datos online")
 }); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});

app.get('/', async function (req, res) {
   res.send('Espoti fai')
   console.log(token);
})