import { IntroListItem, IntroListItemMarker, IntroListItemText, IntroText, IntroWrapper } from './styles';

export const Intro: React.FC = () =>  (
    <IntroWrapper>
        <IntroText>
            Я переконана, що кожна жінка особлива, красива і варта тільки найкращого.
        </IntroText>
        <IntroText>
            Головна мета моєї роботи - протранслювати вашу індивідуальність та допомогти віднайти відчуття впевненості у собі.
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
                    змушу забути про застарілі та неефективні правила стайлінгу
                </IntroListItemText>
            </IntroListItem>
        </div>
    </IntroWrapper>
);
