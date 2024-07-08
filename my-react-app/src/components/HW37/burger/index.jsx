import { useState, useTransition } from 'react';
import styles from './index.scss'

export const Burger = ({isMenuOpen}) => {

    const [isBurgerOpen, setIsBurgerOpen] = useState(isMenuOpen);

    const openBurger = () => {
        setIsBurgerOpen(prevState => !prevState);
    }

    const svgOpen = 
    <svg width="100px" height="100px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0.4800000000000004,0.4800000000000004), scale(0.96)"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#050505" stroke-width="1.392">
    <path d="M20 7L4 7" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path>
    <path d="M20 12L4 12" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path>
    <path d="M20 17L4 17" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path></g>
    
    <g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path> 
    <path d="M20 12L4 12" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path> 
    <path d="M20 17L4 17" stroke="#333" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>;

    const svgClose = 
    <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M6 6L18 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>;
    
    return (
        <section className='burger'>
            <div className='burger__wraper' onClick = {openBurger}>
            {isBurgerOpen ? svgOpen : svgClose }
            
            </div> 
        </section>
    );
};

