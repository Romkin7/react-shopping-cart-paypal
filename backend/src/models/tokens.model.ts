import { Schema, model } from 'mongoose';

export interface TokenDocument {
    token: string;
    tokenId: string;
}

// Define tokenSchema
const TokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        trim: true,
    },
    tokenId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
});

/** Export token model */
const Token = model<TokenDocument>('Token', TokenSchema);

export default Token;
