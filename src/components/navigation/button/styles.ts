import styled, {css} from "styled-components";

export const NavigationButtonWrapper = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    z-index: 20;
`

export const NavigationButtonContentBase = css`
    height: 3px;
    width: 100%;
    background-color: #063970;
    border-radius: 1px;
    transition: all 0.2s ease-in-out;
`

export const NavigationButtonContent = styled.div<{isNavBarOpen: boolean}>`
    ${NavigationButtonContentBase};
    position: relative;
    box-shadow: 0 1px 1px rgba(243, 252, 230, 0.20);
    
    ${({isNavBarOpen}) => isNavBarOpen && css`
        height: 0;
    `};
    
    :before {
        ${NavigationButtonContentBase};
        display: block;
        content: "";
        position: absolute;
        top: -10px;
        box-shadow: 0 1px 1px rgba(243, 252, 230, 0.20);
        ${({isNavBarOpen}) => isNavBarOpen && css`
            background-color: white;
            transform: rotate(45deg);
            top: 0;
        `};
    }
    
    :after {
        ${NavigationButtonContentBase};
        display: block;
        content: "";
        position: absolute;
        top: 10px;
        box-shadow: 0 1px 1px rgba(243, 252, 230, 0.20);
        ${({isNavBarOpen}) => isNavBarOpen && css`
            background-color: white;
            transform: rotate(-45deg);
            top: 0;
        `};
    }
`
