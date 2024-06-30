import React from "react";

export interface INavBarContext {
    aboutMeRef: React.RefObject<HTMLDivElement>,
    servicesForClientsRef: React.RefObject<HTMLDivElement>,
    servicesForBrandsRef: React.RefObject<HTMLDivElement>,
    contactsRef: React.RefObject<HTMLDivElement>,
}

export const NavBarContext = React.createContext<INavBarContext | null>(null)
