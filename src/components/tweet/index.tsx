import { Avatar } from '..';

import './index.scss';

export default function () {
    return (
        <article id='tweet'>
            <Avatar />
            <div>
                <div className='title'>
                    <h3 className='name'>Name</h3>
                </div>
            </div>
        </article>
    );
}
