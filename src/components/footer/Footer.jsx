import './Footer.scss';

import Icons_Instagram from "../../assets/img/decoration/icons/Icons_Instagram.png"
import Icons_Twitter from "../../assets/img/decoration/icons/Icons_Twitter.png"
import Icons_Trello from "../../assets/img/decoration/icons/Icons_Trello.png"



export const Footer2Icon = () => {
    return (
        <footer id='Footer2Icon'>
            <a href="#"><img src={Icons_Twitter} alt="Icons_Twitter" /></a>
            <a href="#"><img src={Icons_Instagram} alt="Icons_Instagram" /></a>
        </footer>

    )
}

export const Footer3Icon = () => {
    return (
        <footer id='Footer3Icon'>
            <a href="https://twitter.com/OhPatia" target="_blank" rel="noopener noreferrer"><img src={Icons_Twitter} alt="Icons_Twitter" /></a>
            <a href="https://www.instagram.com/ohpatia/" target="_blank" rel="noopener noreferrer"><img src={Icons_Instagram} alt="Icons_Instagram" /></a>
            <a href="https://trello.com/invite/b/tFpbp4vQ/2a7c61054ac57f65abc0a8a7231a482a/patias-waiting-list" target="_blank" rel="noopener noreferrer"><img src={Icons_Trello} alt="Icons_Trello" /></a>
        </footer>

    )
}