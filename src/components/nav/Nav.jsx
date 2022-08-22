import './Nav.scss';

import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Logo_Basic from "../../assets/img/decoration/icons/PatiaLogo_Basic.png"
import Buttons_AboutMe from "../../assets/img/decoration/buttons/Buttons_AboutMe.png"
import Buttons_Commissions from "../../assets/img/decoration/buttons/Buttons_Commissions.png"
import Buttons_Inventory from "../../assets/img/decoration/buttons/Buttons_MyInventory.png"
import Buttons_Logos from "../../assets/img/decoration/buttons/Buttons_Logos.png"
import Buttons_Overlays from "../../assets/img/decoration/buttons/Buttons_Overlays.png"
import Buttons_Schedules from "../../assets/img/decoration/buttons/Buttons_Schedules.png"




export const ClassicLogo = () => {
    return (
        <NavLink to="/">
            <img id='ClassicLogo' src={Logo_Basic} alt="PatiaLogo_Basic" />
        </NavLink>
    )
}
export const SmolLogo = () => {
    return (
        <NavLink to="/">
            <img id='SmolLogo' src={Logo_Basic} alt="PatiaLogo_Basic" />
        </NavLink>
    )
}

export const BtAbout = (props) => {
    return (
        <NavLink to="/aboutMe">
            <img className='Bt' src={Buttons_AboutMe} alt="Buttons_AboutMe" />
        </NavLink>
    )
}
export const BtComm = () => {
    return (
        <NavLink to="/menu">
            <img className='Bt' src={Buttons_Commissions} alt="Buttons_Commissions" />
        </NavLink>
    )
}
export const BtInv = () => {
    return (
        <NavLink to="/menu">
            <img className='Bt' src={Buttons_Inventory} alt="Buttons_Inventory" />
        </NavLink>
    )
}
export const BtLogos = () => {
    return (
        <NavLink to="/logos">
            <img className='Bt' src={Buttons_Logos} alt="Buttons_Logos" />
        </NavLink>
    )
}
export const BtOverlays = () => {
    return (
        <NavLink to="/overlays">
            <img className='Bt' src={Buttons_Overlays} alt="Buttons_Overlays" />
        </NavLink>
    )
}
export const BtSchedules = () => {
    return (
        <NavLink to="/schedules">
            <img className='Bt' src={Buttons_Schedules} alt="Buttons_Schedules" />
        </NavLink>
    )
}





