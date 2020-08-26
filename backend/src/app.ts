import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import * as bodyParser from 'body-parser';

// router files
import productoRoutes from './router/index'
import pesajeRouter from './router/pesaje'
import  siloRouter  from "./router/silos";
import authRouter from './router/auth';
import userRouter from './router/user';
import pedidoRouter from './router/pedido';


// Initializations
const app: Application = express();


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));

//midellwares

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});
// Routes
app.use('/uploads', express.static(path.resolve('uploads')));
app.use('/api', productoRoutes);
app.use('/api', pesajeRouter);
app.use('/api',siloRouter);
app.use('/api/auth',authRouter);
app.use('/api',userRouter);
app.use('/api',pedidoRouter);
// this folders for this application will be used to store public file images

export default app;