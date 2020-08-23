import express from "express";
import bodyParser from 'body-parser';
import config from './config';
import newsRouter from './routes/news';

const app = express();
app.use(bodyParser.json());
app.use('/api/news', newsRouter);
// app.get('/api/news', (req, res) => {

// });


app.listen(config.PORT, () => console.log('Server started at port:', config.PORT));