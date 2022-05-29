import './index.scss';
import { WiStars } from 'react-icons/wi';
import { MdOutlinePermMedia } from 'react-icons/md';

export default function TimeLine() {
    return (
        <main id='timeline'>
            <header>
                <h3 className='title'>Latest Tweets</h3>
                <main>
                    <WiStars />
                </main>
            </header>
            <main>
                <header className='tweet'>
                    <header>
                        <div className='avatar'>
                            <img src='avatar.png' alt='avatar' />
                        </div>
                    </header>
                    <form action=''>
                        <textarea
                            name='tweet'
                            id='tweet'
                            placeholder="What's happening?"
                        />
                        <div>
                            <div className='media'>
                                <MdOutlinePermMedia />
                                <input
                                    type='file'
                                    accept='.png,.jpg,.jpeg'
                                    name='image'
                                />
                            </div>
                            <input type='submit' />
                        </div>
                    </form>
                </header>
                <section>
                    <article>Hello twitter</article>
                </section>
            </main>
        </main>
    );
}
