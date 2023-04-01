import styled from 'styled-components';

export const AboutMeWrapper = styled.header`
    background-color: #fcf4e6;
    padding: 2.5rem 2rem;
    color: #063970;
    font-size: 18px;
`

export const AboutMeText = styled.p`
    margin-bottom: 10px;
    
    :last-child {
        margin-bottom: 15px;
    }
`

export const AboutMeList = styled.div`
    margin-top: 1.5rem;
`

export const AboutMeListItem = styled.div`
    margin-bottom: 15px;
`

export const AboutMeListItemMarker = styled.div`
    display: inline-block;
    position: relative;
    font-size: 50px;
    grid-area: marker;
    
    :after {
        position: absolute;
        bottom: 2px;
        left: 0;
        content: "";
        height: 2px;
        width: 100%;
        background-color: #063970;
        border-radius: 1px;
    }
`

export const AboutMeListItemText = styled.div`
    grid-area: text;
    margin-left: 60px;
`


