import { ErrorMessage, Field } from 'formik';

// components
import Error from './Error';

interface FormikInputProps {
    name: string;
    type?: string;
    placeholder?: string;
}

export default function FormikInput(props: FormikInputProps) {
    const { name, ...rest } = props;
    return (
        <article>
            <Field as='input' autoComplete='off' name={name} id={name} {...rest} />
            <ErrorMessage component={Error} name={name} />
        </article>
    );
}
