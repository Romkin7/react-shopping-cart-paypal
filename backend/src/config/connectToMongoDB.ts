import { connect, connection } from 'mongoose';

/**
 * connectToMongoDB function
 * @returns {void}
 */
function connectToMongoDB(): void {
    try {
        const DB_URI = process.env.DB_URI;
        connect(DB_URI);
        connection.on('connected', () => {
            console.log('Connected to Databaase...');
        });
    } catch (error) {
        throw new Error(error);
    }
}

export default connectToMongoDB;
