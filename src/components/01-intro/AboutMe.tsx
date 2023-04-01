import React, { useContext } from 'react';
import { AboutMeList, AboutMeListItem, AboutMeListItemMarker, AboutMeListItemText, AboutMeText, AboutMeWrapper } from './styles';
import { NavBarContext } from '../root/NavBarContext';
import './styles.css'
import { InnerContainer } from '../root/styles';

export const AboutMe: React.FC = () => {
    const navBarContext = useContext(NavBarContext);

    return (
        <AboutMeWrapper ref={navBarContext && navBarContext.aboutMeRef}>
            <InnerContainer>
                <div className="image-wrapper">
                    <div className="image"></div>
                    <div className="title-wrapper">
                        <div className="title-content">
                            <h3 className="title">Марина Коваленко</h3>
                            <h5 className="sub-title">Твій персональний стиліст</h5>
                        </div>
                    </div>
                </div>

                <AboutMeText>
                    Я переконана, що кожна жінка особлива, красива і варта тільки найкращого.
                </AboutMeText>
                <AboutMeText>
                    Головна мета моєї роботи - розкрити вашу індивідуальність, допомогти віднайти відчуття впевненості.
                </AboutMeText>
                <AboutMeText>
                    Робота зі стилістом - це прояв любові до себе, інвестиція у щоденний гарний зовнішній вигляд та заощадження часу і коштів.
                </AboutMeText>
                <AboutMeList>
                    <AboutMeListItem>
                        <AboutMeListItemMarker>01</AboutMeListItemMarker>
                        <AboutMeListItemText>
                            покажу як створювати гармонійні образи
                        </AboutMeListItemText>
                    </AboutMeListItem>
                    <AboutMeListItem>
                        <AboutMeListItemMarker>02</AboutMeListItemMarker>
                        <AboutMeListItemText>
                            навчу купувати речі, які працюватимуть у гардеробі
                        </AboutMeListItemText>
                    </AboutMeListItem>
                    <AboutMeListItem>
                        <AboutMeListItemMarker>03</AboutMeListItemMarker>
                        <AboutMeListItemText>
                            змушу забути про застарілі модні кліше та неефективні правила стайлінгу
                        </AboutMeListItemText>
                    </AboutMeListItem>
                </AboutMeList>
            </InnerContainer>
        </AboutMeWrapper>
    );
};
