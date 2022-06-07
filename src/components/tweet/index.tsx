import { Avatar } from '..';

//  icons
import { HiDotsHorizontal as Options } from 'react-icons/hi';
import { BiMessageRounded as Replay } from 'react-icons/bi';
import { FaRetweet as Retweet } from 'react-icons/fa';
import { AiOutlineHeart as Like } from 'react-icons/ai';
import { FiShare as Share } from 'react-icons/fi';

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
                        <Options />
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
                <footer>
                    <div>
                        <span>
                            <Replay />
                        </span>
                    </div>
                    <div>
                        <span className='retweet'>
                            <Retweet />
                        </span>
                    </div>
                    <div>
                        <span className='like'>
                            <Like />
                        </span>
                    </div>
                    <div>
                        <span>
                            <Share />
                        </span>
                    </div>
                </footer>
            </main>
        </article>
    );
}
