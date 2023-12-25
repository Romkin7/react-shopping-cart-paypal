import { ChangeEvent, FC } from 'react';
import BaseInput from '../../@types/baseInput';
import clsx from 'clsx';
import './TextInput.scss';

interface TextInputProps {
    input: BaseInput;
    labelText: string;
    value: string;
    message?: string;
    hasError?: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
    value,
    input,
    message,
    hasError,
    labelText,
    handleChange,
}) => {
    const { type, name, id, readOnly, required, autoFocus, disabled } = input;
    const textIputStyles = clsx({
        ['input']: true,
        ['input__active']: true,
    });
    const textIputMessageStyles = clsx({
        ['input--message']: message,
        ['input--message__error']: hasError && message,
    });
    return (
        <div className={textIputStyles}>
            <label htmlFor={id}>{`${labelText} ${required ? '*' : ''}`}</label>
            <input
                type={type}
                name={name}
                onChange={handleChange}
                id={id}
                required={required}
                readOnly={readOnly}
                autoFocus={autoFocus}
                disabled={disabled}
                value={value}
            />
            {!!message && <p className={textIputMessageStyles}>{message}</p>}
        </div>
    );
};

export default TextInput;
