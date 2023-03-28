import {IntroList, IntroText, IntroWrapper} from "./styles";

export const Intro: React.FC = () => (
    <IntroWrapper>
        <IntroText>
            Я переконана, що кожна жінка особлива, красива і варта тільки найкращого.
        </IntroText>
        <IntroText>
            Головна мета моєї роботи - протранслювати вашу індивідуальність та допомогти віднайти відчуття впевненості у собі.
        </IntroText>
        <IntroList>
            <li>покажу як створювати гармонійні образи</li>
            <li>купувати речі, які працюватимуть у гардеробі</li>
            <li>змушу забути про застарілі та неефективні правила стайлінгу</li>
        </IntroList>
    </IntroWrapper>
)
