import './index.scss';
import Logo from '../../Logo-white.svg';
import { Link } from 'react-router-dom';

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
                    <div className='title'>Happening now</div>
                    <div className='joining'>
                        <div className='title'>Join Twitter today.</div>
                        <Link to='#' className='signup'>
                            sign up with phone or email
                        </Link>
                        <p>
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                        </p>
                    </div>
                    <div className='have-an-account'>Already have an account?</div>
                    <Link to='#'>sign in</Link>
                </div>
            </main>
            <footer className='footer'>
                <ul className='list'>
                    <li>about</li>
                </ul>
            </footer>
        </div>
    );
}
