import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import weatherRouter from './routes/weather-routes.js'

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/search-location-weather', weatherRouter);



app.listen(3001, ()=>{
    console.log("listening on 3001");
});


