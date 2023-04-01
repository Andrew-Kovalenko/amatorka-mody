import styled from 'styled-components';

export const ContactsWrapper = styled.div`
    background-color: #fcf4e6;
    padding: 1rem 2rem;
    color: #063970;
    font-size: 18px;
`

export const ContactsTitle = styled.p`
    font-size: 32px;
    margin-bottom: 20px;
`

export const ContactsText = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
    
    :last-child {
        margin-bottom: 0;
    }
`

export const ContactsSubTitle = styled.p`
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 10px;
`

export const ContactsLink = styled.a`
    font-size: 16px;
    margin-right: 20px;
    text-decoration: underline;
    cursor: pointer;
    color: #063970;
`


export const ContactsIcon = styled.a`
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background-size: 50px;
`
