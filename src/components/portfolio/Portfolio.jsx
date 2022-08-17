import React, { useState } from "react";








let LogosArray = [
  {
    vtuber: "Sekigetsu Yuki",
    img: "SekigetsuYukiLogoV2.png",
    link: "#",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "ReinaHardgore-LogoV2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const LogoMain = () => {
  return (
    LogosArray.map(({ vtuber, img, link }) => (
      <main key={vtuber}>

        <small>
          <a href={link}>Made for {vtuber}</a>
        </small>
        <img className="PortImgNoShadow" src={require(`../../assets/img/portfolio/logo/${img}`)} alt={vtuber} />
        <div className="Padding"></div>
      </main>
    )
    ))
};


let OverlaysArray = [
  {
    vtuber: "@moenaomii",
    img: "moenaomiiOverlaysWaterMark2.png",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@senpaihinotama",
    img: "SenpaiHinotamaOverlaysWaterMark.png",
    link: "https://twitter.com/senpaihinotama",
  },
  {
    vtuber: "@juninya_vt",
    img: "JuninyaOverlaysWaterMark.png",
    link: "https://twitter.com/juninya_vt",
  },
  {
    vtuber: "Ellen_s_art",
    img: "EllenOverlaysWaterMark.png",
    link: "https://www.instagram.com/ellen_s_art/",
  },
  {
    vtuber: "@KitsuneKandi",
    img: "KitsuneKandiOverlaysWaterMark.png",
    link: "https://twitter.com/KitsuneKandi",
  },
  {
    vtuber: "@ThatMilka",
    img: "ThatMilkaOverlaysWaterMark.png",
    link: "https://twitter.com/ThatMilka",
  },
  {
    vtuber: "@Zukiiya_vt",
    img: "ZukiiOverlaysWaterMark.png",
    link: "https://twitter.com/Zukiiya_vt",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "ReinaHardgoreOverlaysWaterMark2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const OverlaysMain = () => {
  return (
    OverlaysArray.map(({ vtuber, img, link }) => (
      <main key={vtuber}>

        <small>
          <a href={link}>Made for {vtuber}</a>
        </small>
        <img className="PortImg" src={require(`../../assets/img/portfolio/overlays/${img}`)} alt={vtuber} />
        <div className="Padding"></div>
      </main>
    )
    ))
};

let SchedulesArray = [
  {
    vtuber: "@HanamiyaChii",
    img: "WeeklySchedule.png",
    link: "https://twitter.com/HanamiyaChii",
  },
  {
    vtuber: "@moenaomii",
    img: "Moe-WeeklySchedule.png",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "Reina Hardgore-WeeklySchedulev2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const SchedulesMain = () => {
  return (
    SchedulesArray.map(({ vtuber, img, link }) => (
      <main key={vtuber}>

        <small>
          <a href={link}>Made for {vtuber}</a>
        </small>
        <img className="PortImg" src={require(`../../assets/img/portfolio/schedules/${img}`)} alt={vtuber} onClick={this.Modal}></img>/>
        <div className="Padding"></div>
      </main>
    )
    ))
};

export const Modal = () => {


  const CloseModal = event =>{
    event.currentTarget.classList.remove('HiddenModal')  }
  return (
    <figure className="HiddenModal" onClick={CloseModal}></figure>
    )
};
