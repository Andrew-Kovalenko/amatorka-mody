import {Navigation} from '../navigation/Navigation';
import {AboutMe} from '../01-intro/AboutMe';
import {ServicesForClients} from '../02-services/for-clients/ServicesForClients';
import {ServicesForBrands} from "../02-services/for-brands/ServicesForBrands";
import {Contacts} from '../03-contacts/Contacts';
import {INavBarContext, NavBarContext} from './NavBarContext';
import * as React from 'react';
import {useRef} from 'react';
import {SeparatorLine} from "../root/styles";

export const RootComponent: React.FC = () => {
    const initialNavBarContext: INavBarContext = {
        aboutMeRef: useRef(null),
        servicesForClientsRef: useRef(null),
        servicesForBrandsRef: useRef(null),
        contactsRef: useRef(null),
    }

    return (
        <NavBarContext.Provider value={initialNavBarContext}>
            <div>
                <Navigation/>
                <AboutMe/>
                <ServicesForClients/>
                <SeparatorLine/>
                <ServicesForBrands />
                <Contacts />
            </div>
        </NavBarContext.Provider>
    );
}
