import './index.scss';
import {
    FaTwitter,
    FaHome,
    FaHashtag,
    FaRegBookmark,
    FaRegListAlt
} from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { GiFeather } from 'react-icons/gi';
import { Avatar } from '..';

const icons = [
    FaTwitter,
    FaHome,
    FaHashtag,
    IoIosNotificationsOutline,
    MdOutlineMail,
    FaRegBookmark,
    FaRegListAlt,
    BsPerson,
    CgMoreO
];
export default function NavBar() {
    return (
        <nav id='navbar'>
            <ul>
                {icons.map((Icon, index) => (
                    <li key={index}>{<Icon className='icon' />}</li>
                ))}
                <li className='tweet'>
                    <GiFeather className='icon' />
                </li>
            </ul>
            <Avatar />
        </nav>
    );
}
