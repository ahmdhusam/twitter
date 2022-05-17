import './index.scss';
import Logo from '../../Logo-white.svg';
import { Link } from 'react-router-dom';

const footerLinks = [
    'About',
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Ads info',
    'Blog',
    'Status',
    'Careers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'Twitter for Business',
    'Developers',
    'Directory',
    'Settings'
];
export default function Main() {
    return (
        <div id='main'>
            <main>
                <div className='left'>
                    <img src='lohp_en_1302x955.png' alt='' />
                    <img src='2021-Twitter-logo-white.png' alt='' />
                </div>
                <div className='right'>
                    <div className='logo'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <h1 className='title'>Happening now</h1>
                    <div className='joining'>
                        <h4 className='title'>Join Twitter today.</h4>
                        <Link to='/signup' className='rounded'>
                            sign up with phone or email
                        </Link>
                        <p>
                            By signing up, you agree to the <a href='#'>Terms of Service</a> and{' '}
                            <a href='#'>Privacy Policy</a>, including <a href='#'>Cookie Use</a>.
                        </p>
                    </div>
                    <div className='signin'>
                        <h4>Already have an account?</h4>
                        <Link to='/signin' className='rounded'>
                            sign in
                        </Link>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                <ul className='list'>
                    {footerLinks.map(hrf => (
                        <li>
                            <Link to={'/' + hrf.trim().replaceAll(' ', '-').toLowerCase()}>{hrf}</Link>
                        </li>
                    ))}
                    <li>© 2022 Twitter, Inc.</li>
                </ul>
            </footer>
        </div>
    );
}
