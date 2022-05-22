import { NavBar } from '../../components';
import TimeLine from './timeline';
import SideBar from './sidebar';

import './index.scss';

export default function Home() {
    return (
        <div id='home'>
            <NavBar />
            <TimeLine />
            <SideBar />
        </div>
    );
}
