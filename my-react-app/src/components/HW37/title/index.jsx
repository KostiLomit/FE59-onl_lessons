import { useState } from 'react';
import styles from './index.scss'

export const Title = ({ isMouseOn }) => {

    const [isMouseOnTitle, setMouseOnTitle] = useState(isMouseOn);

    const handleMouseEnter = () => {
        setMouseOnTitle(true);
    };

    const handleMouseLeave = () => {
        setMouseOnTitle(false);
    };

    
    return (
        <section className='title' >
            <div className='title__wraper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className={`${isMouseOnTitle ? 'big-title' : ''}`}>Sign In</h2>
            </div>
        </section>
    );
};