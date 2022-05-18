import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

// components
import FormikInput from './Input';

// libs
import { initialValues, validetSchema } from '../../libs/formikSchema';

//style
import './index.scss';

// logo
import Logo from '../../Logo-white.svg';

interface MainSignFormProps {
    btnSubValue: string;
    redirectTo: string;
    msgBeforLink: string;
    insertInputName?: boolean;
}

export default function MainSignForm(props: MainSignFormProps) {
    const router = useNavigate();

    const { btnSubValue, redirectTo, msgBeforLink, insertInputName = false } = props;

    const onSubmit = () => {
        router('/home');
        window.document.cookie = `fakeAuth=${true}`;
    };

    return (
        <div id='sign'>
            <main>
                <section>
                    <header>
                        <Link to='/' className='close'>
                            x
                        </Link>
                        <img className='logo' src={Logo} alt='Logo' />
                    </header>
                    <main>
                        <h3 className='title'>Sign {btnSubValue} to Twitter</h3>
                        <Formik
                            initialValues={initialValues(insertInputName)}
                            validationSchema={validetSchema(insertInputName)}
                            onSubmit={onSubmit}>
                            <Form>
                                {insertInputName && (
                                    <FormikInput placeholder='Enter Your Name' type='text' name='username' />
                                )}
                                <FormikInput placeholder='Enter Your Email' type='email' name='email' />
                                <FormikInput placeholder='Enter Your Password' type='password' name='password' />
                                <button type='submit'>Sign {btnSubValue}</button>
                            </Form>
                        </Formik>
                        <footer>
                            <span>{msgBeforLink}</span>{' '}
                            <Link to={`/sign${redirectTo.trim().toLowerCase()}`}>Sign {redirectTo}</Link>
                        </footer>
                    </main>
                </section>
            </main>
        </div>
    );
}
