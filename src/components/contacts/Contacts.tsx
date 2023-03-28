import { ContactsLink, ContactsSubTitle, ContactsText, ContactsTitle, ContactsWrapper } from './styles';
import { NavBarContext } from '../root/NavBarContext';
import { useContext } from 'react';

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
            <ContactsLink target="_blank" href="https://instagram.com/amatorka_mody">INSTAGRAM</ContactsLink>
            <ContactsLink target="_blank" href="https://t.me/amatorka_mody">TELEGRAM</ContactsLink>

            <ContactsSubTitle>EMAIL:</ContactsSubTitle>
            <ContactsLink href="mailto:your-email@gmail.com" type="email">your-email@gmail.com</ContactsLink>

        </ContactsWrapper>
    );
};
