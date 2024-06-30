import styled, {css} from 'styled-components';

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.5rem;
    font-size: 18px;
    cursor: pointer;
    transition: all .2s linear;
    
    @media (hover: hover) {
        :active {
            border-bottom: 1px solid #fcf4e6;
            color: #fcf4e6;
            opacity: 75%;
        }
    }
    
    @media (hover: none) {
        :active {
            border-bottom: 1px solid #fcf4e6;
            color: #fcf4e6;
            opacity: 75%;
        }
    }
`

export const ServicesAccordionHeaderTitle = styled.h4`
    vertical-align: center;
    width: 100%;
`

export const ServicesAccordionHeaderTitleFormat = styled.h4`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: end;
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
    display: grid;
    width: fit-content;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: all 0.3s linear;

    ${({isOpen}) => isOpen && css`
        overflow: hidden;
        opacity: 1;
        grid-template-rows: 1fr;
      `
    }
`

export const ServicesAccordionItemContent = styled.div<{isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 100%;
    padding: ${({isOpen}) => isOpen ? '0.5rem' : '0 0.5rem'};
    opacity: 85%;
    overflow: hidden;
    transition: all 0.3s linear;

    ul {
        margin-bottom: 1rem;
    }
    
     ol, ul {
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

export const BenefitsList = styled.ul`
`
