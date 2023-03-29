import styled from 'styled-components';


export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    background-color: #063970;
    color: white;
`

export const ServicesTitle = styled.h2`
    font-size: 32px;
    margin-bottom: 20px;
`

export const ServicesAccordion = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-collapse: collapse;
    border-radius: 5px;
`

export const ServicesAccordionHeader = styled.div`
    min-height: 60px;
    border-bottom: 1px solid white;
    display: grid;
    grid-template-columns: 4fr 1fr 35px;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.5rem;
    font-size: 18px;
`

export const ServicesAccordionHeaderTitle = styled.h4`
    vertical-align: center;
`

export const ServicesAccordionHeaderTitleFormat = styled.h4`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    opacity: 60%;
    text-transform: uppercase;
    margin-left: 10px;
`

export const ServicesAccordionHeaderArrow = styled.div<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    
    padding: 0.2rem 0.5rem;
    transform: ${({isOpen}) => isOpen && 'rotate(-45deg)'};
    transition: all .2s linear;
`

export const ServicesAccordionItem = styled.div<{isOpen: boolean}>`
    display: flex;
    width: 100%;
    height: ${({isOpen}) => isOpen ? '100%' : '0'};
    transform: ${({isOpen}) => isOpen ? 'scaleY(1)' : 'scaleY(0)'};
    transition: all .3s;
    overflow: hidden;
`

export const ServicesAccordionItemContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 100%;
    padding: 0.5rem 0.5rem;
    opacity: 85%;

    ul {
        margin-bottom: 1rem;
    }
    
     ol {
         margin-top: 0.5rem;
     }
    
    li {
        padding-left: 10px;
        margin-bottom: 5px;
        list-style-position: inside;
        font-size: 16px;
        line-height: 18px;
    }
`

export const ServicesAccordionItemListTitle = styled.div`
    display: flex;
    width: fit-content;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 0.5rem;
    padding-bottom: 2px;
    border-bottom: 1px solid #fcf4e6;
`

export const ServicesAccordionItemListSummary = styled.p`
    padding-left: 1rem;
    font-size: 14px;
`;

export const ServicesAccordionItemSummary = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    position: relative;

    p {
        padding-left: 0.5rem;
        padding-bottom: 5px;
    }
    
    span {
        font-weight: 900;
        opacity: 100%;
    }
    
    :before {
        display: block;
        content: "";
        position: absolute;
        height: 100%;
        width: 2px;
        border-radius: 0.5px;
        top: 0;
        left: -5px;
        background-color: white;
        opacity: 60%;
    }
`
