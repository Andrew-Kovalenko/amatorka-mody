import {useCallback, useState} from "react";
import {NavigationButton} from "./button/NavigationButton";
import {NavBar} from "./nav-bar/NavBar";

export const Navigation = () => {
    const [isNavBarOpen, setIsNavBarOpen]  = useState(false)

    const toggleNavBar = useCallback(() => setIsNavBarOpen(!isNavBarOpen), [isNavBarOpen])

    return (
        <>
            <NavBar isNavBarOpen={isNavBarOpen} toggleNavBar={toggleNavBar} />
            <NavigationButton isNavBarOpen={isNavBarOpen} toggleNavBar={toggleNavBar} />
        </>
    )
}
