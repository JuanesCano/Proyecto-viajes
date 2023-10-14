import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//rutas
//connectDB

const app = express();
app.set('port', 5000);
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(app.get('port'), () => {console.log('servidor escuchando por el puerto', app.get('port'));});