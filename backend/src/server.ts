import { config } from 'dotenv';
// Put dotenv in use before importing controllers
config();

import app from './app';
import connectToMongoDB from './config/connectToMongoDB';

connectToMongoDB();

// Set PORT and IP
app.set('port', process.env.PORT);
app.set('ip', process.env.IP);
// Start express server.
app.listen(app.get('port'), app.get('ip'), () => {
    console.log(
        `React Shopping cart with PayPal checkout is running on PORT: ${app.get(
            'port',
        )} and IP: ${app.get('ip')}...`,
    );
});
