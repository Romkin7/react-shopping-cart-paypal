/** decimalToInteger util function takes in price
 * and number of decimals to be left, and returns decimal value without rounding.
 * */
function decimalToInteger(price: number, decimalPlaces: number): number {
    const addZero =
        String(price).charAt(String(price).length - 1) === '0'
            ? true
            : String(price).split('.').join('').length < 4
              ? true
              : false;
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (decimalPlaces || -1) + '})?');
    const rounded = (price.toString().match(re) as string[])[0];
    const toString = addZero
        ? String(rounded).split('.').join('') + '0'
        : String(rounded).split('.').join('');
    const toNumber = Number(toString);
    return toNumber;
}

export default decimalToInteger;
