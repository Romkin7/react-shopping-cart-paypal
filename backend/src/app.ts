import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import controllers
import payPalRoutes from './routes/payPal.routes';
// import bodyParser
import { json, urlencoded } from 'body-parser';

// Create the express application
const app: Express = express();
app.use(
    cors({
        origin: '*',
    }),
);
// Configure bodyParser
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));
// Assign controllers to routes
app.use(payPalRoutes);

export default app;