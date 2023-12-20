import sumReducer from './sumReducer';

/**
 * Generate pincode util
 * @param {ISODateString} date
 * @return {string}
 */
const generatePinCode = (date: string): string => {
    const numericArray: number[] = [];
    date.split('T')[0]
        .split('-')
        .forEach((element: string) => numericArray.push(parseInt(element))); // split the dateTime string into parts and sum them
    date.split('T')[1]
        .split(':')
        .forEach((element: string) => numericArray.push(parseFloat(element)));
    const id = numericArray.reduce(sumReducer);
    // log the new generated id, substr can be used to change the length of numberic ID
    return id.toString().replace('.', '').substr(1, 6);
};

export default generatePinCode;
