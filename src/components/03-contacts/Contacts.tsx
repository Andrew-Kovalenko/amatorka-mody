import { useContext } from 'react';
import { NavBarContext } from '../root/NavBarContext';
import { ContactsIcon, ContactsText, ContactsTitle, ContactsWrapper, } from './styles';

import './styles.css'
import { InnerContainer } from '../root/styles';

export const Contacts: React.FC = () => {
    const navBarContext = useContext(NavBarContext);

    return (
        <ContactsWrapper ref={navBarContext && navBarContext.contactsRef}>
            <InnerContainer>
                <ContactsTitle>
                    Контакти
                </ContactsTitle>
                <ContactsText>
                    Підписуйтесь на інші канали зв’язку, щоб дізнаватися про моду та стиль ще більше.
                </ContactsText>
                <ContactsIcon target="_blank" href="https://instagram.com/amatorka_mody" className="instagram-icon"/>
                <ContactsIcon target="_blank" href="https://t.me/amatorka_mody"  className="telegram-icon"/>
                <ContactsIcon target="_blank" href="https://www.tiktok.com/@amatorka_mody"  className="tiktok-icon"/>
            </InnerContainer>
        </ContactsWrapper>
    );
};
