// d8733b9870344734911895a6444a20a5
// http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d8733b9870344734911895a6444a20a5

import express from "express";
import axios from "axios";
import config from '../config';


const router = express.Router();

router.get('/', (req, res) => {
    const { country, category } = req.query;
    axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${config.apiKey}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

export default router;