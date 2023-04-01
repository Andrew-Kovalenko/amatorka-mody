import styled from 'styled-components';

export const IntroWrapper = styled.div`
    background-color: #fcf4e6;
    padding: 1rem 2rem;
    color: #063970;
    font-size: 18px;
`

export const IntroText = styled.p`
    margin-bottom: 5px;
    
    :last-child {
        margin-bottom: 15px;
    }
`

export const IntroListItem = styled.div`
    margin-bottom: 15px;
`

export const IntroListItemMarker = styled.div`
    width: 45px;
    position: relative;
    font-size: 50px;
    grid-area: marker;
    
    :after {
        position: absolute;
        bottom: 10px;
        right: -45px;
        content: "";
        height: 2px;
        width: 50px;
        background-color: #063970;
        border-radius: 1px;
        transform: rotate(-45deg);
    }
`

export const IntroListItemText = styled.div`
    grid-area: text;
    margin-left: 60px;
`


