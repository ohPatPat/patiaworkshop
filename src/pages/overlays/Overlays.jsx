import { ArrowIcon } from "../../components/bolt_icons/BoltIcons.jsx";
import { SmolLogo } from "../../components/nav/Nav.jsx";
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import { OverlaysMain } from "../../components/portfolio/Portfolio.jsx";
import { Modal } from "../../components/portfolio/Portfolio.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";
import React, { useState, useEffect } from "react";

export const Overlays = (props) => {
  return (
    <section id="Overlays">
      <MetaTags title={props.title}></MetaTags>
      <ArrowIcon season={props.season}></ArrowIcon>

      <header>
        <h5>{props.title}</h5>
        <SmolLogo></SmolLogo>
        <div className="Padding"></div>
        <h1 id="PageTitle">Overlay Designs</h1>
        <p>
          Startup pack (2 overlays) - 50€
          <br />
          Standard pack (4 overlays) - 100€
        </p>
        <p className="Extra">(Raw files are 20€ extra)</p>
        <hr />
        <strong>Choice of items includes:</strong>
        <small>
          <br />
          - Background with pattern
          <br />
          - Gameplay overlay
          <br />
          - Just Chatting overlay
          <br />
          - Starting screen
          <br />
          - brb screen
          <br />- Ending screen
        </small>
        <div className="Padding"></div>
        <p>If you have something else in mind just dm me :3</p>
        <div className="Padding"></div>
      </header>
      <hr />
      <main>
        <OverlaysMain></OverlaysMain>
      </main>
      <hr />
      <footer>
        <Footer3Icon season={props.season}/>
      </footer>
    </section>
  );
};
