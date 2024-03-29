import { ArrowIcon } from "../../components/bolt_icons/BoltIcons.jsx";
import { SmolLogo } from "../../components/nav/Nav.jsx";
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import { SchedulesMain } from "../../components/portfolio/Portfolio.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";

export const Schedules = (props) => {
  return (
    <section id="Schedules">
      <MetaTags title={props.title}></MetaTags>
      <ArrowIcon season={props.season}></ArrowIcon>
      <header>
        <h5>{props.title}</h5>
        <SmolLogo></SmolLogo>
        <div className="Padding"></div>
        <h1 id="PageTitle">Schedule designs</h1>
        <p>Weekly schedule - 50€</p>
        <p>(Raw files included in the price)</p>
        <div className="Padding"></div>
      </header>
      <hr />
      <main>
        <SchedulesMain></SchedulesMain>
      </main>
      <hr />
      <footer>
        <Footer3Icon season={props.season} />
      </footer>
    </section>
  );
};
