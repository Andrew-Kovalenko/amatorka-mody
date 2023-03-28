import {NavBarContent, NavBarItem, NavBarOverlay, NavBarWrapper} from "./styles";

interface IPropsNavBar {
    isNavBarOpen: boolean,
    toggleNavBar: () => void,
}

export const NavBar: React.FC<IPropsNavBar> = ({
   isNavBarOpen,
   toggleNavBar,
}) => (
    <NavBarWrapper isNavBarOpen={isNavBarOpen}>
        <NavBarOverlay onClick={toggleNavBar} />
        <NavBarContent >
            <NavBarItem>
                Про мене
            </NavBarItem>
            <NavBarItem>
                Послуги
            </NavBarItem>
            <NavBarItem>
                Відгуки
            </NavBarItem>
            <NavBarItem>
                Контакти
            </NavBarItem>
        </NavBarContent>
    </NavBarWrapper>
)
