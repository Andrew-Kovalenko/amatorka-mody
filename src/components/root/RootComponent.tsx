import {Header} from "../header/Header";
import {Navigation} from "../navigation/Navigation";
import {Intro} from "../intro/Intro";
import {Services} from "../services/Services";
import { INavBarContext, NavBarContext } from './NavBarContext';
import { useRef } from "react";

export const RootComponent: React.FC = () => {
    const initialNavBarContext: INavBarContext = {
        mainRef: useRef(null),
        servicesRef: useRef(null),
        contactsRef: useRef(null),
    }

    return (
        <NavBarContext.Provider value={initialNavBarContext}>
            <div>
                <Header/>
                <Navigation/>
                <Intro/>
                <Services/>
            </div>
        </NavBarContext.Provider>
    );
}
