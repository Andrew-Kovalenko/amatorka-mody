import {Header} from "../header/Header";
import {Navigation} from "../navigation/Navigation";
import {Intro} from "../intro/Intro";
import {Services} from "../services/Services";

export const RootComponent: React.FC = () => (
    <div>
        <Header />
        <Navigation />
        <Intro />
        <Services />
    </div>
)
