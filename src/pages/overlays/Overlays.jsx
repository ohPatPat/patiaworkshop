import { ArrowIcon } from '../../components/bolt_icons/BoltIcons.jsx';
import { SmolLogo } from '../../components/nav/Nav.jsx';
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import { OverlaysMain } from "../../components/portfolio/Portfolio.jsx";
import { MetaTags } from "../../components/MetaTags.jsx";
import React, { useState, useEffect } from "react";



export const Overlays = (props) => {
    const [imageSrc, setImageSrc] = useState("");
    const [isModalOpenW, setIsModalOpenW] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);


    const handleClickW = (src) => {
        setImageSrc(src);
        setIsModalOpenW(true);
        setPrevScrollPos(window.pageYOffset);
    };

    // function to close the modal
    const handleClose = () => {
        setImageSrc("");
        setIsModalOpenW(false);
    };

    useEffect(() => {
        if (isModalOpenW) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            window.scrollTo(0, prevScrollPos);
        }
    }, [isModalOpenW, prevScrollPos]);


    return (
        <section id="Overlays">
            <MetaTags title={props.title}></MetaTags>
            <ArrowIcon></ArrowIcon>
            
            {isModalOpenW && (
                <section id="Modal">
                    <img src={imageSrc} alt={imageSrc} />

                    <span className="close-button" onClick={handleClose}>
                        <div className="in">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                        <div className="out">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                    </span>
                </section>
            )}

            <header>
                <h5>{props.title}</h5>
                <SmolLogo></SmolLogo>
                <div className="Padding"></div>
                <h1 id="PageTitle">
                    Overlay Designs
                </h1>
                <p>
                    Startup pack (2 overlays) - 50€
                    <br />
                    Standard pack (4 overlays) - 100€
                </p>
                <p className="Extra">

                    (Raw files are 20€ extra)
                </p>
                <hr />
                <strong>Choice of items includes:</strong>
                <small>
                    - Background with pattern
                    <br />
                    - Gameplay overlay
                    <br />
                    - Just Chatting overlay
                    <br />
                    - Starting screen
                    <br />
                    - brb screen
                    <br />
                    - Ending screen
                </small>
                <div className="Padding"></div>
                <p>
                    If you have something else in mind
                    just dm me :3
                </p>
                <div className="Padding"></div>
            </header>
            <hr />
            <main>
                <OverlaysMain></OverlaysMain>
            </main>
            <hr />
            <footer>
                <Footer3Icon></Footer3Icon>
            </footer>
        </section>


    )


}