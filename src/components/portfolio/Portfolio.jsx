

let LogosArray = [
  {
    vtuber: "@Kinoq",
    img: "KinoqLogo.webp",
    link: "https://x.com/kinoqVT?s=20",
  },
  {
    vtuber: "Sekigetsu Yuki",
    img: "SekigetsuYukiLogoV2.webp",
    link: "#",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "ReinaHardgore-LogoV2.webp",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const LogoMain = () => {
  return LogosArray.map(({ vtuber, img, link }) => (
    <figure className="ProductWrapper" key={vtuber}>
      <img
        className="PortImgNoShadow"
        src={require(`../../assets/img/portfolio/logo/${img}`)}
        alt={vtuber}
        loading="lazy"
      />
      <figcaption>
        <small>
          <a href={link} target="blank">
            Made for {vtuber}
          </a>
        </small>
      </figcaption>
      <div className="Padding"></div>
    </figure>
  ));
};

let OverlaysArray = [
  {
    vtuber: "@RuffelTwitch",
    img: "RuffelOverlaysWaterMark.webp",
    link: "https://x.com/RuffelTwitch?s=20",
  },
  {
    vtuber: "@GlorieCaprae",
    img: "GloriaOverlaysWaterMark.webp",
    link: "https://x.com/GlorieCaprae?s=20",
  },
  {
    vtuber: "@Kinoq",
    img: "KinoqOverlayMockup.webp",
    link: "https://x.com/kinoqVT?s=20",
  },
  {
    vtuber: "@moenaomii",
    img: "MoenaomiiOverlayMockup.webp",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@senpaihinotama",
    img: "SenpaiHinotamaOverlayMockup.webp",
    link: "https://twitter.com/senpaihinotama",
  },
  {
    vtuber: "@juninya_vt",
    img: "JuninyaOverlayMockup.webp",
    link: "https://twitter.com/juninya_vt",
  },
  {
    vtuber: "Ellen_s_art",
    img: "EllenOverlayMockup.webp",
    link: "https://www.instagram.com/ellen_s_art/",
  },
  {
    vtuber: "@KitsuneKandi",
    img: "KitsuneKandiOverlayMockup.webp",
    link: "https://twitter.com/KitsuneKandi",
  },
  {
    vtuber: "@ThatMilka",
    img: "ThatMilkaOverlayMockup.webp",
    link: "https://twitter.com/ThatMilka",
  },
  {
    vtuber: "@Zukiiya_vt",
    img: "ZukiiyaVtOverlayMockup.webp",
    link: "https://twitter.com/Zukiiya_vt",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "ReinaHardgoreOverlayMockup.webp",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const OverlaysMain = () => {
  return OverlaysArray.map(({ vtuber, img, link }) => (
    <figure className="ProductWrapper" key={vtuber}>
      <img
        className="PortImg"
        src={require(`../../assets/img/portfolio/overlays/${img}`)}
        alt={vtuber}
        loading="lazy"
      />
      <figcaption>
        <small>
          <a href={link} target="blank">
            Made for {vtuber}
          </a>
        </small>
      </figcaption>

      <div className="Padding"></div>
    </figure>
  ));
};

let SchedulesArray = [
  {
    vtuber: "@HanamiyaChii",
    img: "WeeklySchedule.webp",
    link: "https://twitter.com/HanamiyaChii",
  },
  {
    vtuber: "@moenaomii",
    img: "Moe-WeeklySchedule.webp",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "Reina Hardgore-WeeklySchedulev2.webp",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const SchedulesMain = () => {

  return SchedulesArray.map(({ vtuber, img, link }) => (
            <figure className="ProductWrapper" key={vtuber}>
              <img
                className="PortImg"
                src={require(`../../assets/img/portfolio/schedules/${img}`)}
                alt={vtuber}
                loading="lazy"
              ></img>
              <figcaption>
                <small>
                  <a href={link} target="blank">
                    Made for {vtuber}
                  </a>
                </small>
              </figcaption>
              <div className="Padding"></div>
            </figure>
  ));
};
