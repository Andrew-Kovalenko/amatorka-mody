import './styles.css'
import { NavBarContext } from '../root/NavBarContext';
import { useContext } from 'react';

export const Header: React.FC = () => {
    const navBarContext = useContext(NavBarContext);

    return (
        <header className="header-container" ref={navBarContext && navBarContext.mainRef}>
            <h3 className="title">Марина Коваленко</h3>
            <h5 className="sub-title">Твій персональний стиліст</h5>
        </header>
    )
}
