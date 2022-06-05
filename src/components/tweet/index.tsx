import { Avatar } from '..';

//  icons
import { HiDotsHorizontal } from 'react-icons/hi';

// styles
import './index.scss';

export default function () {
    return (
        <article id='tweet'>
            <Avatar />
            <main>
                <header>
                    <div className='title'>
                        <h3 className='name'>{'Name'}</h3>
                        <span className='username'>@{'username'}</span>
                        <span>·</span>
                        <span className='time'>{'5m'}</span>
                    </div>
                    <div className='options'>
                        <HiDotsHorizontal />
                    </div>
                </header>
                <p className='content'>
                    {`Hello Twitter
                    Hello Twitter
                    Hello Twitter
                    Hello Twitter
                    Hello Twitter
                    Hello Twitter
                    Hello Twitter
                    Hello Twitter`}
                </p>
                <footer></footer>
            </main>
        </article>
    );
}
