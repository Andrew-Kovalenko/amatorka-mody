import { Navigation } from '../navigation/Navigation';
import { AboutMe } from '../01-intro/AboutMe';
import { Services } from '../02-services/Services';
import { INavBarContext, NavBarContext } from './NavBarContext';
import { useRef } from 'react';
import { Contacts } from '../03-contacts/Contacts';

export const RootComponent: React.FC = () => {
    const initialNavBarContext: INavBarContext = {
        aboutMeRef: useRef(null),
        servicesRef: useRef(null),
        contactsRef: useRef(null),
    }

    return (
        <NavBarContext.Provider value={initialNavBarContext}>
            <div>
                <Navigation/>
                <AboutMe/>
                <Services/>
                <Contacts />
            </div>
        </NavBarContext.Provider>
    );
}
