import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// CONFIG
import config from './config/config';

// ROUTERS
import apiRouter from './routers/api';

// MONGODB SETUP
mongoose.connect(config.mongoURI);
mongoose.Promise = global.Promise;

// BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// VIEW ENGINE SETUP
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ROUTES
app.get('/', (req, res) => { res.render('index'); });
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});

module.exports = app;
