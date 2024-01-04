import InputTypes from './inputTypes';

interface BaseInput {
    type: InputTypes;
    name: string;
    id: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
}

export default BaseInput;
