import "./Nav.scss";

import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Logo_Basic from "../../assets/img/decoration/icons/PatiaLogo_Basic.png";
import Buttons_AboutMe from "../../assets/img/decoration/buttons/Buttons_AboutMe.png";
import Buttons_Commissions from "../../assets/img/decoration/buttons/Buttons_Commissions.png";
import Buttons_Inventory from "../../assets/img/decoration/buttons/Buttons_MyInventory.png";
import Buttons_Logos from "../../assets/img/decoration/buttons/Buttons_Logos.png";
import Buttons_Overlays from "../../assets/img/decoration/buttons/Buttons_Overlays.png";
import Buttons_Schedules from "../../assets/img/decoration/buttons/Buttons_Schedules.png";

import Logo_Basic_Christmas from "../../assets/img/decoration/icons/PatiaLogo_Christmas.png";
import Buttons_AboutMe_Christmas from "../../assets/img/decoration/buttons/Buttons_AboutMe_Christmas.png";
import Buttons_Commissions_Christmas from "../../assets/img/decoration/buttons/Buttons_Commissions_Christmas.png";
import Buttons_Inventory_Christmas from "../../assets/img/decoration/buttons/Buttons_MyInventory_Christmas.png";
import Buttons_Logos_Christmas from "../../assets/img/decoration/buttons/Buttons_Logos_Christmas.png";
import Buttons_Overlays_Christmas from "../../assets/img/decoration/buttons/Buttons_Overlays_Christmas.png";
import Buttons_Schedules_Christmas from "../../assets/img/decoration/buttons/Buttons_Schedules_Christmas.png";

export const ClassicLogo = (props) => {

  return (
    <NavLink to="/">
      <img
        id="ClassicLogo"
        src={` ${props.season ? Logo_Basic_Christmas : Logo_Basic}`}
        alt="PatiaLogo_Basic"
      />
    </NavLink>
  );
};
export const SmolLogo = (props) => {
  return (
    <>
      <img
        id="SmolLogo"
        src={` ${props.season ? Logo_Basic_Christmas : Logo_Basic}`}
        alt="PatiaLogo_Basic"
      />
    </>
  );
};

export const BtAbout = (props) => {
  return (
    <NavLink to="/aboutMe">
      <img
        className="Bt"
        src={` ${props.season ? Buttons_AboutMe_Christmas : Buttons_AboutMe}`}
        alt="Buttons_AboutMe"
      />
    </NavLink>
  );
};
export const BtComm = (props) => {
  return (
    <NavLink to="/menu">
      <img
        className="Bt"
        src={` ${
            props.season ? Buttons_Commissions_Christmas : Buttons_Commissions
        }`}
        alt="Buttons_Commissions"
      />
    </NavLink>
  );
};
export const BtInv = (props) => {
  return (
    <NavLink to="/menu">
      <img
        className="Bt"
        src={` ${props.season ? Buttons_Inventory_Christmas : Buttons_Inventory}`}
        alt="Buttons_Inventory"
      />
    </NavLink>
  );
};
export const BtLogos = (props) => {
  return (
    <NavLink to="/logos">
      <img
        className="Bt"
        src={` ${props.season ? Buttons_Logos_Christmas : Buttons_Logos}`}
        alt="Buttons_Logos"
      />
    </NavLink>
  );
};
export const BtOverlays = (props) => {
  return (
    <NavLink to="/overlays">
      <img
        className="Bt"
        src={` ${props.season ? Buttons_Overlays_Christmas : Buttons_Overlays}`}
        alt="Buttons_Overlays"
      />
    </NavLink>
  );
};
export const BtSchedules = (props) => {
  return (
    <NavLink to="/schedules">
      <img
        className="Bt"
        src={` ${props.season ? Buttons_Schedules_Christmas : Buttons_Schedules}`}
        alt="Buttons_Schedules"
      />
    </NavLink>
  );
};
