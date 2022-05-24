import { Link } from 'react-router-dom';

import './index.scss';

const footerLinks = [
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Ads info',
    'More'
];

export default function SideBar() {
    return (
        <aside id='sidebar'>
            <input
                className='search rounded'
                type='text'
                placeholder='Search Twitter'
            />
            <div className='rounded'>
                <h5 className='title'>What’s happening</h5>
            </div>
            <div className='rounded'>
                <h5 className='title'>Who to follow</h5>
            </div>
            <ul>
                {footerLinks.map(hrf => (
                    <li key={hrf.trim().replaceAll(' ', '-').toLowerCase()}>
                        <Link
                            to={
                                '/' +
                                hrf.trim().replaceAll(' ', '-').toLowerCase()
                            }>
                            {hrf === 'More' ? `${hrf}...` : hrf}
                        </Link>
                    </li>
                ))}
                <li>© 2022 Twitter, Inc.</li>
            </ul>
        </aside>
    );
}
