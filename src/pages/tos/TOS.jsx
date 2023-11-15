import { NavLink } from "react-router-dom";
import { TLbolt } from "../../components/bolt_icons/BoltIcons.jsx";
import { SmolLogo } from "../../components/nav/Nav.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";

export const TOS = (props) => {
  return (
    <section id="TOS">
      <MetaTags title={props.title}></MetaTags>
      <TLbolt season={props.season}></TLbolt>
      <header>
        <h5>{props.title}</h5>
        <SmolLogo></SmolLogo>
        <h1 id="TOSTitle">Term of services</h1>
        <p>
          Please read through my TOS
          <br />
          thoroughly
        </p>
      </header>
      <hr />
      <main>
        <ul id="TOSText">
          <li>- I have the right to decline any commission.</li>
          <br />
          <li>
            - After I begin there will be no refunds allowed unless I am unable
            to finish the commission in which case I will issue a full refund.
          </li>
          <br />
          <li>
            - I have the right to post, display, and share my work (on twitter
            and in portfolio for example) unless otherwise discussed. If you
            would like me to wait for a certain date please mention it.
          </li>
          <br />
          <li>
            - Please be respectful about my prefered way of communication
            (Twitter or Discord DM)~ I am very patient when it comes to
            replying, but in most cases I will not continue progress until I get
            your "OK" on details/updates.
          </li>
          <br />
          <li>
            - After discussing what service you want, I take the full payment up
            front. This is done through Paypal only.
          </li>
          <br />
          <li>
            - My prices include commercial rights and may be used as you pleased
            (ex. streaming, twitter posts, discord, etc) but I ask to be
            credited if possible!
          </li>
          <br />
          <li>
            - Commissions can take anywhere from 1 week to 1 month depending on
            the design ~ We can agree on a deadline before I start the
            commission, but if you have no deadline in mind. I will give you a
            rough estimate of when it will be completed (The estimate can be
            wrong).
          </li>
          <br />
          <li>- I only provide services in Graphic Design and vector work</li>
          <br />
          <li>
            - I cannot translate names from english to kanji/katakana/hiragana
            or provide illustrations.
          </li>
        </ul>
        <hr />
        <p>
          By commissioning me
          <br />
          you agree to all of these terms.
        </p>
        <NavLink
          className={` ${props.season ? "ChristmasButton" : ""}`}
          to="/menu"
        >
          <button>Yes i agree</button>
        </NavLink>
        <span></span>
        <span></span>
      </main>
    </section>
  );
};
