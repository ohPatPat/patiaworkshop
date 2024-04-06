import { ArrowIcon } from "../../components/bolt_icons/BoltIcons.jsx";
import { SmolLogo } from "../../components/nav/Nav.jsx";
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import { AnimatedMain } from "../../components/portfolio/Portfolio.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";

export const Animated = (props) => {
  return (
    <section id="Animated">
      <MetaTags title={props.title}></MetaTags>
      <ArrowIcon season={props.season}></ArrowIcon>

      <header>
        <h5>{props.title}</h5>
        <SmolLogo></SmolLogo>
        <div className="Padding"></div>
        <h1 id="PageTitle">Animated Designs</h1>
        <p>
          Price depends on the commission
        </p>
        <p className="Extra">(Raw files are 20€ extra)</p>
      </header>
      <hr />
      <main>
        <AnimatedMain></AnimatedMain>
      </main>
      <hr />
      <footer>
        <Footer3Icon season={props.season}/>
      </footer>
    </section>
  );
};
