import { useContext } from 'react';
import { NavBarContext } from '../root/NavBarContext';
import { ContactsIcon, ContactsLink, ContactsSubTitle, ContactsText, ContactsTitle, ContactsWrapper, } from './styles';

import './styles.css'

export const Contacts: React.FC = () => {
    const navBarContext = useContext(NavBarContext);

    return (
        <ContactsWrapper ref={navBarContext && navBarContext.contactsRef}>
            <ContactsTitle>
                Контакти
            </ContactsTitle>
            <ContactsText>
                Давайте залишатися на зв'язку.
            </ContactsText>
            <ContactsText>
                Ви можете зв'язатися зі мною по будь-якому з нижче приведених каналів.
            </ContactsText>
            <ContactsSubTitle>Соціальні мережі:</ContactsSubTitle>
            <ContactsIcon target="_blank" href="https://instagram.com/amatorka_mody" className="instagram-icon"/>
            <ContactsIcon target="_blank" href="https://t.me/amatorka_mody"  className="telegram-icon"/>
            <ContactsIcon target="_blank" href="https://www.tiktok.com/@amatorka_mody"  className="tiktok-icon"/>
            <ContactsSubTitle>EMAIL:</ContactsSubTitle>
            <ContactsLink href="mailto:your-email@gmail.com" type="email">your-email@gmail.com</ContactsLink>
        </ContactsWrapper>
    );
};
