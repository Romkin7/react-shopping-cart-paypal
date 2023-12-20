import { Types } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';

/** Token types */
export interface TokenDocument extends Document {
    token: string;
    tokenId: string;
}
export interface IToken extends TokenDocument {
    _id: Types.ObjectId;
}
export interface IAccessToken {
    accessToken: string;
}

export interface IJWTSettings {
    token: string;
    expiry: Date;
}

interface ExtendedJwtPayload extends JwtPayload {
    _id: string;
}

export default ExtendedJwtPayload;
