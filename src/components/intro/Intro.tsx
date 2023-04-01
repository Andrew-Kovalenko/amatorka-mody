import { IntroListItem, IntroListItemMarker, IntroListItemText, IntroText, IntroWrapper } from './styles';

export const Intro: React.FC = () =>  (
    <IntroWrapper>
        <IntroText>
            Я переконана, що кожна жінка особлива, красива і варта тільки найкращого.
        </IntroText>
        <IntroText>
            Головна мета моєї роботи - розкрити вашу індивідуальність, допомогти віднайти відчуття впевненості.
        </IntroText>
        <IntroText>
            Робота зі стилістом - це прояв любові до себе, інвестиція у щоденний гарний зовнішній вигляд та заощадження часу і коштів.
        </IntroText>
        <div>
            <IntroListItem>
                <IntroListItemMarker>01</IntroListItemMarker>
                <IntroListItemText>
                    покажу як створювати гармонійні образи
                </IntroListItemText>
            </IntroListItem>
            <IntroListItem>
                <IntroListItemMarker>02</IntroListItemMarker>
                <IntroListItemText>
                    купувати речі, які працюватимуть у гардеробі
                </IntroListItemText>
            </IntroListItem>
            <IntroListItem>
                <IntroListItemMarker>03</IntroListItemMarker>
                <IntroListItemText>
                    змушу забути про застарілі модні кліше та неефективні правила стайлінгу
                </IntroListItemText>
            </IntroListItem>
        </div>
    </IntroWrapper>
);
