import { NavLink } from "react-router-dom";
import { TLbolt } from "../../components/bolt_icons/BoltIcons.jsx";
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import {
  ClassicLogo,
  BtLogos,
  BtOverlays,
  BtSchedules,
  BtAnimated,
} from "../../components/nav/Nav.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";

export const Menu = (props) => {
  return (
    <section id="Menu">
      <MetaTags title={props.title}></MetaTags>
      <TLbolt season={props.season}></TLbolt>
      <header>
        <h5>{props.title}</h5>
        <ClassicLogo></ClassicLogo>
      </header>
      <main>
        <p>
          Here is the list of s-services I provide from my inventory.
          <br />
          <br />
          If you're looking for something else, dont be afraid to just d-dm me.
        </p>
        <BtLogos season={props.season}></BtLogos>
        <BtOverlays season={props.season}></BtOverlays>
        <BtSchedules season={props.season}></BtSchedules>
        <BtAnimated season={props.season}></BtAnimated>

        <p id="TosText1">Please remember to read my</p>
        <NavLink
          className={` ${props.season ? "ChristmasButton" : ""}`}
          to="/tos"
        >
          <button>Terms of services</button>
        </NavLink>
        <p id="TosText2">before -</p>
        <NavLink
          className={` ${props.season ? "ChristmasButton" : ""}`}
          to="/contact"
        >
          <button>Contacting me</button>
        </NavLink>
        <span></span>
      </main>
      <hr />
      <footer>
        <Footer3Icon season={props.season} />
      </footer>
    </section>
  );
};
