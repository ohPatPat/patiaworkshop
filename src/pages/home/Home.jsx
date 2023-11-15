import { TLbolt } from "../../components/bolt_icons/BoltIcons.jsx";
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import { ClassicLogo, BtAbout, BtInv } from "../../components/nav/Nav.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";

export const Home = (props) => {
  return (
    <section id="Home">
      <MetaTags title={props.title}></MetaTags>

      <TLbolt season={props.season}></TLbolt>
      <header>
        <h5>{props.title}</h5>
        <ClassicLogo></ClassicLogo>
        <h1 className="H1Text TextColor">Hello hello and welcome traveller.</h1>
      </header>
      <hr />
      <main>
        <p className="TextColor">
          Thank you for checking out my little graphic workshop.
          <br />
          <br />
          On this site you can find, all my commissions I have done for
          different Vtubers over the years.
          <br />
          Stuff like -
        </p>
        <ul className="TextColor">
          <li>Logos</li>
          <li>Overlays</li>
          <li>Schedules</li>
          <li>And more</li>
        </ul>
        <p className="TextColor">
          {" "}
          If you're looking for more information about my commissions or want to
          know more about me, then feel free to click on one of the big buttons
          below.
        </p>
        <BtAbout season={props.season}></BtAbout>
        <BtInv season={props.season}></BtInv>
      </main>
      <footer>
        <Footer3Icon season={props.season} />
      </footer>
    </section>
  );
};
