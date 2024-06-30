import {NavBarContent, NavBarItem, NavBarOverlay, NavBarWrapper} from "./styles";
import { NavBarContext } from '../../root/NavBarContext';
import { useContext } from "react";

interface IPropsNavBar {
    isNavBarOpen: boolean,
    toggleNavBar: () => void,
}

export const NavBar: React.FC<IPropsNavBar> = ({
   isNavBarOpen,
   toggleNavBar,
}) => {
    const navBarContext = useContext(NavBarContext);

    if (!navBarContext) {
        return (
            <NavBarWrapper isNavBarOpen={isNavBarOpen}>
                Cannot found nav context
            </NavBarWrapper>
        )
    }

    const onItemClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'})
            toggleNavBar()
        }
    }

    return (
        <NavBarWrapper isNavBarOpen={isNavBarOpen}>
            <NavBarOverlay onClick={toggleNavBar}/>
            <NavBarContent>
                <NavBarItem onClick={() => onItemClick(navBarContext.aboutMeRef)}>
                    Про мене
                </NavBarItem>
                <NavBarItem onClick={() => onItemClick(navBarContext?.servicesForClientsRef)}>
                    Послуги
                </NavBarItem>
                <NavBarItem onClick={() => onItemClick(navBarContext?.servicesForBrandsRef)}>
                    Для брендів
                </NavBarItem>
                <NavBarItem onClick={() => onItemClick(navBarContext.contactsRef)}>
                    Контакти
                </NavBarItem>
            </NavBarContent>
        </NavBarWrapper>
    );
}
