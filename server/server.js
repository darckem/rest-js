require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('base de datos ONLINE!!');
});
// mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true });

//User: darckem
//Pass: UFj@36k7#vxWW!U // L9lmyZ3agvl6Ohhw
//conn: mongodb+srv://darckem:UFj@36k7#vxWW!U@rest-fv6yl.mongodb.net/test
// mongodb+srv://darckem:L9lmyZ3agvl6Ohhw@rest-fv6yl.mongodb.net/test

// mongoose.connect('mongodb://127.0.0.1:27017/cafe', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.listen(process.env.PORT, () => {
    console.log("escuchando en el puerto: ", process.env.PORT);
});