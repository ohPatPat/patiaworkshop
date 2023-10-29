import { NavLink } from "react-router-dom";
import { TLbolt, TRbolt, BLbolt, BRbolt, ArrowIcon } from '../../components/bolt_icons/BoltIcons.jsx';
import { SmolLogo, BtLogos, BtOverlays, BtSchedules } from '../../components/nav/Nav.jsx';
import { Footer2Icon, Footer3Icon } from "../../components/footer/Footer.jsx";
import { LogoMain } from "../../components/portfolio/Portfolio.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";


export const Logos = (props) => {

    return (
        <section id="Logos">
            <MetaTags title={props.title}></MetaTags>
            <ArrowIcon season={props.season}></ArrowIcon>
            <header>
                <h5>{props.title}</h5>
                <SmolLogo></SmolLogo>
                <div className="Padding"></div>
                <h1 id="PageTitle">
                    Logo designs
                </h1>
                <p>
                    A logo - 75€
                </p>
                <p>

                    (Raw files are 20€ extra)
                </p>
                <div className="Padding"></div>
            </header>
            <hr />
            <main>
            <LogoMain></LogoMain>
            </main>
            <hr />
            <footer>
                <Footer3Icon season={props.season}/>
            </footer>
        </section>

    )


}