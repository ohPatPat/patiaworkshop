import { NavLink } from "react-router-dom";
import { TLbolt, TRbolt, BLbolt, BRbolt } from '../../components/bolt_icons/BoltIcons.jsx';
import { Footer2Icon, Footer3Icon } from "../../components/footer/Footer.jsx";
import { ClassicLogo, BtAbout, BtInv } from '../../components/nav/Nav.jsx';
import { MetaTags } from "../../components/MetaTags.jsx";


export const Error = (props) => {

    return (

        <section id="Error">
      <MetaTags title={props.title}></MetaTags>

            <TLbolt></TLbolt>
            <header>
                <h5>{props.title}</h5>
                <NavLink to="/">
                <h1 id="ErrorTitle" className="H1Text TextColor">
                    Error! page not found!
                </h1>
                </NavLink>
                <h2></h2>
            </header>


        </section>
    )


}