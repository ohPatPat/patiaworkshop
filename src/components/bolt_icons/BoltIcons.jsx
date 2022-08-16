import './BoltIcons.scss';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Bolt_Icon1 from "../../assets/img/decoration/icons/Icons_Bolt1.png"
import Bolt_Icon2 from "../../assets/img/decoration/icons/Icons_Bolt2.png"
import Bolt_Icon3 from "../../assets/img/decoration/icons/Icons_Bolt3.png"
import Bolt_Icon4 from "../../assets/img/decoration/icons/Icons_Bolt4.png"
import Arrow_Icon from "../../assets/img/decoration/icons/Icons_BackArrow.png"


export const TRbolt = () => {
    return (
        <img id='TRbolt' src={Bolt_Icon1} alt="Bolt_icon1" />
    )
}
export const BLbolt = () => {
    return (
        <img id='BLbolt' src={Bolt_Icon1} alt="Bolt_icon1" />
    )
}
export const TLbolt = () => {
    return (
        <img id='TLbolt' src={Bolt_Icon3} alt="Bolt_icon3" />
    )
}
export const BRbolt = () => {
    return (
        <img id='BRbolt' src={Bolt_Icon3} alt="Bolt_icon3" />
    )
}
export const ArrowIcon = () => {
    const navigate = useNavigate();
    return (
        <img  id='ArrowBack' src={Arrow_Icon} alt="Arrow_back_icon" onClick={() => navigate(-1)}/>
    )
}