import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// Routers
import studentsRouter from  './routes/stundent-routes.js';
import teachersRouter from  './routes/teacher-routes.js';
import enrollmentsRouter from  './routes/enrollment-routes.js';
import lecturesRouter from  './routes/lecture-routes.js';
import classesRouter from  './routes/class-routes.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/enrollments', enrollmentsRouter);
app.use('/lectures', lecturesRouter);
app.use('/classes', classesRouter);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, ()=>{
    console.log("listening on 3000");
});


// to be deleted
import repo from './persistency/data-population-repository.js';