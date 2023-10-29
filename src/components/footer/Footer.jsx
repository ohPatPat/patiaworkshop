import "./Footer.scss";

import Icons_Instagram from "../../assets/img/decoration/icons/Icons_Instagram.png";
import Icons_Twitter from "../../assets/img/decoration/icons/Icons_Twitter.png";
import Icons_Trello from "../../assets/img/decoration/icons/Icons_Trello.png";

import Icons_InstagramChristmas from "../../assets/img/decoration/icons/Icons_InstagramChristmas.png";
import Icons_TwitterChristmas from "../../assets/img/decoration/icons/Icons_TwitterChristmas.png";
import Icons_TrelloChristmas from "../../assets/img/decoration/icons/Icons_TrelloChristmas.png";

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
        href="https://trello.com/invite/b/tFpbp4vQ/2a7c61054ac57f65abc0a8a7231a482a/patias-waiting-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={` ${props.season ? Icons_TrelloChristmas : Icons_Trello}`}
          alt="Icons_Trello"
        />
      </a>
    </footer>
  );
};
