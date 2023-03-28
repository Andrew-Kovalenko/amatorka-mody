import styled from "styled-components";

export const NavBarWrapper = styled.div<{isNavBarOpen: boolean}>`
    position: fixed;
    top: 0;
    right: ${({isNavBarOpen}) => isNavBarOpen ? '0' : '-100%'};
    display: flex;
    height: 100vh;
    width: 100%;
    z-index: 5;

    transition: right 0.3s linear;
`

export const NavBarOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const NavBarContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #063970;
    z-index: 10;
`

export const NavBarItem = styled.div`
    margin-bottom: 30px;
    text-align: center;
    padding: 0 25%;
    font-size: 20px;
    color: white;
`
