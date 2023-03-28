import React from "react";

export interface INavBarContext {
    mainRef: React.RefObject<HTMLDivElement>,
    servicesRef: React.RefObject<HTMLDivElement>,
    contactsRef: React.RefObject<HTMLDivElement>,
}

export const NavBarContext = React.createContext<INavBarContext | null>(null)
