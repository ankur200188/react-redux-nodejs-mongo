import express from 'express';
import axios from 'axios';
import config from '../config/config';
const router = express.Router();

// MODELS
import Model from '../models/Model';

// DEFINE API ROUTES HERE
router.get('/greeting', (req, res) => {
    console.log(Model);
    res.send('Greetings');
});

router.route('/consumers').get((req, res) => {
    axios.get(`${config.apiURL}/data/consumers.json`)
        .then(function (response) {
        // handle success
            res.send(response.data);
        })
        .catch(function (error) {
        // handle error
            console.log(error);
            return [];
        });
});

router.route('/consumers/:id').get((req, res) => {
    const id = req.params['id'];
    if(!id) {
        return [];
    }
    const fileName = `${id}.json`;
    const filePath = `${config.apiURL}/data/consumers/${fileName}`;
    axios.get(filePath)
        .then(function (response) {
            // handle success
            // const data = JSON.parse(response.data);
            // req.setHeader('Content-Type', 'application/json');
            res.send(response.data);
        })
        .catch(function (error) {
        // handle error
            console.log(error);
            return [];
        });
});


module.exports = router;
