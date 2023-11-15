import { ArrowIcon } from '../../components/bolt_icons/BoltIcons.jsx';
import { BtInv } from '../../components/nav/Nav.jsx';
import { Footer3Icon } from "../../components/footer/Footer.jsx";
import HypeFace from "../../assets/img/decoration/faces/GoblinFace_Hyped.png"
import HappyFace from "../../assets/img/decoration/faces/GoblinFace_Happy.png"
import { MetaTags } from "../../components/MetaTags.jsx";


export const About = (props) => {

    return (

        <section id="About" className="TextColor">
            <MetaTags title={props.title}></MetaTags>
            <ArrowIcon season={props.season}/>
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
                <strong className="TextColor">O-Oh hello again traveller!</strong>

                <p className="AboutText">
                    My name is Patia.. Patia Patroski the goblin, but you can just call me PatPat for short UwU
                    <br />
                    <br />
                    I-I am a curious goblin with slavic origin, who likes living a peaceful hobbit'like lifestyle. THO! I don't mind a graphical challenge! >:3
                    <br />
                    <br />

                    I'm a g-goblin of many hobbies. I enjoy spending my time on losing in video games, watching cartoons and building cool and creative stuff for hecking'awesome people.
                </p>
                <img id='HappyFace' src={HappyFace} alt="HappyFace" />
                <p className="AboutText">
                    T-Thats why I started my little cute web-shop, as a means to easily help others, especially for newcomers that are just starting up streaming.
                    <br />
                    <br />

                    I graduated from a graphic designer school (tho it's a school for Goblins & Grimlins, so take that with a pinch of salt). I'm currently specialized in making graphics and assets for Vtubers!.. tho can easily work with other cool people aswell ofc :3
                    <br />
                    <br />

                    Feel free to click on "my inventory" and maybe you will find something interesting, that will inspire you ^^
                </p>
                <BtInv season={props.season}></BtInv>
            </main>
            <footer>
                <Footer3Icon season={props.season}/>
            </footer>
        </section>
    )


}