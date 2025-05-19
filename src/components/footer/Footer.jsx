import "./Footer.scss";

import Icons_Instagram from "../../assets/img/decoration/icons/Icons_Instagram.png";
import Icons_Twitter from "../../assets/img/decoration/icons/Icons_Twitter.png";
import Icons_BlueSky from "../../assets/img/decoration/icons/Icons_BlueSky.png";

import Icons_InstagramChristmas from "../../assets/img/decoration/icons/Icons_InstagramChristmas.png";
import Icons_TwitterChristmas from "../../assets/img/decoration/icons/Icons_TwitterChristmas.png";
import Icons_BlueSkyChristmas from "../../assets/img/decoration/icons/Icons_BlueSkyChristmas.png";

export const Footer3Icon = (props) => {

  return (
    <footer id="Footer3Icon">
      <a
        href="https://twitter.com/OhPatia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={` ${props.season ? Icons_TwitterChristmas : Icons_Twitter}`}
          alt="Icons_Twitter"
        />
      </a>

      <a
        href="https://www.instagram.com/ohpatia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={` ${props.season ? Icons_InstagramChristmas : Icons_Instagram}`}
          alt="Icons_Instagram"
        />
      </a>

      <a
        href="https://bsky.app/profile/ohpatia.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={` ${props.season ? Icons_BlueSkyChristmas : Icons_BlueSky}`}
          alt="Icons_BlueSky"
        />
      </a>
    </footer>
  );
};
