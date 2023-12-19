import { Response } from 'express';
import { verify } from 'jsonwebtoken';
import generatePinCode from './uniquePinCode';
import Token from '../models/tokens.model';
import ErrorMessages from '../errors/errorMessages';
import ExtendedJwtPayload from '../@types/token';

export function createPincode(): string {
    return generatePinCode(new Date().toJSON());
}

export function setRefreshTokenExpiry(): string {
    const expiry = '14d'; // 2 weeks
    return expiry;
}

export function setAccessTokenExpiry(): string {
    const expiry = '1d'; // 1 day
    return expiry;
}

export async function getRefreshToken(
    decodedAccessToken: ExtendedJwtPayload,
    response: Response,
): Promise<Response<any, Record<string, any>> | ExtendedJwtPayload> {
    const refreshToken = await Token.findOne({
        tokenId: `refreshToken-${decodedAccessToken._id}`,
    });
    if (!refreshToken) {
        return response
            .status(401)
            .json({ message: ErrorMessages.jwtMissingError });
    }
    const decodedRefreshToken = decodeRefreshToken(
        refreshToken.token,
        response,
    );
    return decodedRefreshToken as ExtendedJwtPayload;
}

export function decodeRefreshToken(
    refreshToken: string,
    response: Response,
): ExtendedJwtPayload | Response<any, Record<string, any>> {
    try {
        if (!refreshToken) {
            return response.status(401).json({
                message: ErrorMessages.invalidTokenError,
            });
        }
        const decodedRefreshToken = verify(
            refreshToken,
            process.env.JWT_REFRESH_TOKEN_SECRET,
        ) as ExtendedJwtPayload;
        return decodedRefreshToken;
    } catch (error) {
        console.log(error);
        return response
            .status(403)
            .json({ message: ErrorMessages.invalidTokenError });
    }
}
