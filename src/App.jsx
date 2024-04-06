import { NavLink } from "react-router-dom";
import "./App.scss";
import {
  TLbolt,
  TRbolt,
  BLbolt,
  BRbolt,
} from "./components/bolt_icons/BoltIcons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import { Logos } from "./pages/logos/Logos";
import { Menu } from "./pages/menu/Menu";
import { Overlays } from "./pages/overlays/Overlays";
import { Schedules } from "./pages/schedules/Schedules";
import { Animated } from "./pages/animated/Animated";
import { TOS } from "./pages/tos/TOS";
import { Contact } from "./pages/contact/Contact";
import { Error } from "./pages/error/Error";
import { Flower } from "./components/loader/Flower";
import { Seasons } from "./components/seasons/Seasons";

import SnowTop from "./assets/img/decoration/SnowTop.webp";

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

function App() {
  const month = new Date().getMonth();

  const Christmas = month === 10 || month === 11 || month === 0;
  //const Christmas = month === 9;

  useEffect(() => {
    if (Christmas) {
      document.body.classList.add("Christmas"); // Add the class
      const elementsWithClass = document.querySelectorAll(".TextColor");
      elementsWithClass.forEach((element) => {
        element.style.color = "white"; // Add the style
      });
    } else {
      document.body.classList.add("Blank"); // Add the class
      const elementsWithClass = document.querySelectorAll(".TextColor");
      elementsWithClass.forEach((element) => {
        element.style.color = "#ffb6e7"; // Add the style
      });
    }
  }, []);

  return (
    <>
      <Flower />
      <Seasons season={Christmas} />
      <div id="Card" className="TextColor">
        <img src={SnowTop} alt="" id={Christmas ? "SnowTop" : "DisplayNone"} />
        <TRbolt season={Christmas} />

        <Router>
          <Routes>
            <Route
              index
              element={
                <Home
                  title={"Patia's workshop | Front page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/aboutMe"
              element={
                <About
                  title={"Patia's workshop | About me page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  title={"Patia's workshop | Inventory page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/logos"
              element={
                <Logos
                  title={"Patia's workshop | Logo commission page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/overlays"
              element={
                <Overlays
                  title={"Patia's workshop | Overlays commission page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/schedules"
              element={
                <Schedules
                  title={"Patia's workshop | Schedules commission page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/animated"
              element={
                <Animated
                  title={"Patia's workshop | Animated commission page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="/tos"
              element={
                <TOS title={"Patia's workshop | TOS page"} season={Christmas} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  title={"Patia's workshop | Contact page"}
                  season={Christmas}
                />
              }
            />
            <Route
              path="*"
              element={
                <Error
                  title={"Patia's workshop | lkjgljf page"}
                  season={Christmas}
                />
              }
            />
          </Routes>
        </Router>

        <BLbolt season={Christmas} />
        <BRbolt season={Christmas} />
      </div>
      <div id="Space"></div>
    </>
  );
}

export default App;
