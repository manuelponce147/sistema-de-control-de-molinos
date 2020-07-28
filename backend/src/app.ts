import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import * as bodyParser from 'body-parser';

// router files
import indexRoutes from './router/index'
import pesajeRouter from './router/pesaje'
import  siloRouter  from "./router/silos";
import authRouter from './router/auth';

// Initializations
const app: Application = express();


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//midellwares

app.use(cors());
app.use(function (req,res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-COntrol-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,x-client-key,x-client-token,x-client-secret,Authorization");
    next();

})
// Routes
app.use('/api', indexRoutes);
app.use('/api', pesajeRouter);
app.use('/api',siloRouter);
app.use('/api/auth',authRouter);
// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;