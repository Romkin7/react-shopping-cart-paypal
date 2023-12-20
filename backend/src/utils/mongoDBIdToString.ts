import { ObjectId } from 'mongoose';

/**
 * Convert mongo DB id to string
 * @param {ObjectId} id
 * @returns {string}
 */
function mongoDBIdToString(id: ObjectId): string {
    return id.toString();
}

export default mongoDBIdToString;
