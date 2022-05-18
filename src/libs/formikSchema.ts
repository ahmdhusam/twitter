import * as Yup from 'yup';

export const initialValues = (withUserName?: boolean) => {
    if (withUserName) {
        return {
            username: '',
            ...initialValues()
        };
    }

    return {
        email: '',
        password: ''
    };
};

export const validetSchema = (withUserName?: boolean) => Yup.object(validetSchemaOptions(withUserName));

function validetSchemaOptions(withUserName?: boolean) {
    if (withUserName) {
        return {
            username: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Required'),
            ...validetSchemaOptions()
        };
    }

    return {
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required')
    };
}
