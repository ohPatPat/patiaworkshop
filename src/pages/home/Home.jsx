import { NavLink } from "react-router-dom";
import { TLbolt, TRbolt, BLbolt, BRbolt } from '../../components/bolt_icons/BoltIcons.jsx';
import { Footer2Icon, Footer3Icon } from "../../components/footer/Footer.jsx";
import { ClassicLogo, BtAbout, BtComm } from '../../components/nav/Nav.jsx';


export const Home = (props) => {

    return (
        <section id="Home">
            <TLbolt></TLbolt>
            <header>
            <h5>{props.title}</h5>
                <ClassicLogo></ClassicLogo>
                <h1 className="H1Text TextColor">Hello hello and welcome traveller.
                </h1>
            </header>
            <hr />
            <main>
                <p className="TextColor">Thank you for checking out my
                    little graphic workshop.
                    <br />
                    <br />
                    On this site you can find, all my commissions I have done for different Vtubers over the years.
                    <br />
                    I do stuff like - 
                    </p> 
                    <ul className="TextColor">
                        <li>
                            - Logos
                        </li>
                        <li>
                            - Overlays
                        </li>
                        <li>
                            - Schedules
                        </li>
                    </ul>
                    <p className="TextColor"> If you're looking for more information about my commissions or want to know more about me, then feel free to click on one of the big buttons below.
                </p>
                <BtAbout></BtAbout>
                <BtComm></BtComm>
            </main>
            <footer>
                <Footer3Icon></Footer3Icon>
            </footer>


        </section>
    )


}