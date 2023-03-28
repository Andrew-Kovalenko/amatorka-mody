import {NavigationButtonContent, NavigationButtonWrapper} from "./styles";

interface IPropsNavigationButton {
    isNavBarOpen: boolean,
    toggleNavBar: () => void,
}

export const NavigationButton: React.FC<IPropsNavigationButton> = ({
    isNavBarOpen,
    toggleNavBar
}) => {

    return (
        <NavigationButtonWrapper onClick={toggleNavBar}>
            <NavigationButtonContent isNavBarOpen={isNavBarOpen}/>
        </NavigationButtonWrapper>
    );
}
