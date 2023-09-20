import { NavLink } from "react-router-dom"
import { ArrowIcon, TLbolt } from '../../components/bolt_icons/BoltIcons.jsx';
import { BtInv } from '../../components/nav/Nav.jsx';
import { Footer2Icon, Footer3Icon } from "../../components/footer/Footer.jsx";
import HypeFace from "../../assets/img/decoration/faces/GoblinFace_Hyped.png"
import HappyFace from "../../assets/img/decoration/faces/GoblinFace_Happy.png"
import { MetaTags } from "../../components/MetaTags.jsx";


export const About = (props) => {

    return (

        <section id="About">
            <MetaTags title={props.title}></MetaTags>
            <ArrowIcon></ArrowIcon>
            <header>
                <h5>{props.title}</h5>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <div className="Padding"></div>
                <h1 id="PageTitle">About me</h1>
            </header>
            <main>
                <img id='HypeFace' src={HypeFace} alt="HypeFace" />
                <strong >O-Oh hello again traveller!</strong>

                <p className="AboutText">
                    My name is Patia.. Patia Patroski the goblin, but you can just call me PatPat for short UwU
                    <br />
                    <br />
                    I-I am a shy but curious slavic goblin who likes living a peaceful hobbit'like lifestyle. THO! I don't mind a graphical challenge! >:3
                    <br />
                    <br />

                    I'm a g-goblin of many hobbies. I enjoy spending my time on losing in video games, watching cartoons and building cool and creative stuff for really hecking'awesome people.
                </p>
                <img id='HappyFace' src={HappyFace} alt="HappyFace" />
                <p className="AboutText">
                    T-Thats why I started my little cute web-shop, as a means to easily help others, especially for newcomers that are just starting up streaming.
                    <br />
                    <br />

                    I graduated from a graphic designer school (tho it's a school for Goblins & Grimlins, so take that with a pinch of salt). I'm currently specializrd in making graphics and assets for Vtubers!.. tho can easily work with other cool people aswell ofc :3
                    <br />
                    <br />

                    Feel free to click on "my inventory" and maybe you will find something interesting, that will inspire you ^^
                </p>
                <BtInv></BtInv>
            </main>
            <footer>
                <Footer3Icon></Footer3Icon>
            </footer>
        </section>
    )


}