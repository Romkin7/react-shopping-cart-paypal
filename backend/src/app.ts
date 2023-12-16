import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import api routes
import authRoutes from './routes/auth.routes';
import payPalRoutes from './routes/payPal.routes';
import rolesRoutes from './routes/roles.routes';
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
app.use(authRoutes);
app.use(payPalRoutes);
app.use(rolesRoutes);

export default app;
