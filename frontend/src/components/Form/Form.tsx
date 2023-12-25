import { FC, FormEvent, PropsWithChildren } from 'react';

interface IFormProps {
    method: 'get' | 'post';
    action: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

type FormProps = PropsWithChildren<IFormProps>;

const Form: FC<FormProps> = ({ children, method, action, handleSubmit }) => {
    return (
        <form action={action} method={method} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
