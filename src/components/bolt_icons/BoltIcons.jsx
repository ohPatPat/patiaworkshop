import "./BoltIcons.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Bolt_Icon1 from "../../assets/img/decoration/icons/Icons_Bolt1.png";
import Bolt_Icon2 from "../../assets/img/decoration/icons/Icons_Bolt2.png";
import Bolt_Icon3 from "../../assets/img/decoration/icons/Icons_Bolt3.png";
import Bolt_Icon4 from "../../assets/img/decoration/icons/Icons_Bolt4.png";
import Arrow_Icon from "../../assets/img/decoration/icons/Icons_BackArrow.png";

import Bolt_Icon1Christmas from "../../assets/img/decoration/icons/Icons_Bolt1Christmas.png";
import Bolt_Icon2Christmas from "../../assets/img/decoration/icons/Icons_Bolt2Christmas.png";
import Bolt_Icon3Christmas from "../../assets/img/decoration/icons/Icons_Bolt3Christmas.png";
import Bolt_Icon4Christmas from "../../assets/img/decoration/icons/Icons_Bolt4Christmas.png";
import Arrow_IconChristmas from "../../assets/img/decoration/icons/Icons_BackArrowChristmas.png";

export const TRbolt = (props) => {
  return (
    <img
      id="TRbolt"
      src={` ${props.season ? Bolt_Icon1Christmas : Bolt_Icon1}`}
      alt="Bolt_icon1"
    />
  );
};
export const BLbolt = (props) => {
  return (
    <img
      id="BLbolt"
      src={` ${props.season ? Bolt_Icon1Christmas : Bolt_Icon1}`}
      alt="Bolt_icon1"
    />
  );
};
export const TLbolt = (props) => {
  return (
    <img
      id="TLbolt"
      src={` ${props.season ? Bolt_Icon3Christmas : Bolt_Icon3}`}
      alt="Bolt_icon3"
    />
  );
};
export const BRbolt = (props) => {
  return (
    <img
      id="BRbolt"
      src={` ${props.season ? Bolt_Icon3Christmas : Bolt_Icon3}`}
      alt="Bolt_icon3"
    />
  );
};
export const ArrowIcon = (props) => {
  const navigate = useNavigate();
  return (
    <img
      id="ArrowBack"
      src={` ${props.season ? Arrow_IconChristmas : Arrow_Icon}`}
      alt="Arrow_back_icon"
      onClick={() => navigate(-1)}
    />
  );
};
