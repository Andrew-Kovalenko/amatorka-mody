import styled, {css} from "styled-components";

export const NavigationButtonWrapper = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 20;
`

export const NavigationButtonContentBase = css`
    height: 2px;
    width: 100%;
    background-color: white;
    border-radius: 1px;
    transition: all 0.2s ease-in-out;
`

export const NavigationButtonContent = styled.div<{isNavBarOpen: boolean}>`
    ${NavigationButtonContentBase};
    position: relative;
    height: ${({isNavBarOpen}) => isNavBarOpen && '0' };
    
    :before {
        ${NavigationButtonContentBase};
        display: block;
        content: "";
        position: absolute;
        top: -10px;
        ${({isNavBarOpen}) => isNavBarOpen && css`
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
        ${({isNavBarOpen}) => isNavBarOpen && css`
            transform: rotate(-45deg);
            top: 0;
        `};
    }
`
