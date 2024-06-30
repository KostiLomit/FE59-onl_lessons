import styles from './index.scss'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="hader__container">
                    <div className="header__log">
                        <img src="../" alt=""/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__el">
                                <a href="#" className="header__link">Homework</a>
                            </li>
                            <li className="header__el">
                                <a href="#" className="header__link">ToDo-list</a>
                            </li>
                            <li className="header__el">
                                <a href="#" className="header__link">Test</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};