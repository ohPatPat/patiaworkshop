

let LogosArray = [
  {
    vtuber: "Sekigetsu Yuki",
    img: "../../assets/img/portfolio/logo/Sekigetsu Yuki LogoV2.png",
    link: "#",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "../../assets/img/portfolio/logo/Reina Hardgore-LogoV2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];

let OverlaysArray = [
  {
    vtuber: "@moenaomii",
    img: "moenaomiiOverlaysWaterMark2.png",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@senpaihinotama",
    img: "../../assets/img/portfolio/overlays/SenpaiHinotamaOverlaysWaterMark.png",
    link: "https://twitter.com/senpaihinotama",
  },
  {
    vtuber: "@juninya_vt",
    img: "../../assets/img/portfolio/overlays/JuninyaOverlaysWaterMark.png",
    link: "https://twitter.com/juninya_vt",
  },
  {
    vtuber: "Ellen_s_art",
    img: "../../assets/img/portfolio/overlays/EllenOverlaysWaterMark.png",
    link: "https://www.instagram.com/ellen_s_art/",
  },
  {
    vtuber: "@KitsuneKandi",
    img: "../../assets/img/portfolio/overlays/KitsuneKandiOverlaysWaterMark.png",
    link: "https://twitter.com/KitsuneKandi",
  },
  {
    vtuber: "@ThatMilka",
    img: "../../assets/img/portfolio/overlays/ThatMilkaOverlaysWaterMark.png",
    link: "https://twitter.com/ThatMilka",
  },
  {
    vtuber: "@Zukiiya_vt",
    img: "../../assets/img/portfolio/overlays/ZukiiOverlaysWaterMark.png",
    link: "https://twitter.com/Zukiiya_vt",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "../../assets/img/portfolio/overlays/ReinaHardgoreOverlaysWaterMark2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];

export const OverlaysMain = () => {
    return (
  OverlaysArray.map(({vtuber,img,link}) => (
      <main key={vtuber}>

        <small>
          <a href={link}>{vtuber}</a>
        </small>
        <img src="../../assets/img/portfolio/overlays/"{img} alt={vtuber} />
      </main>
  )
  ))
};

let SchedulesArray = [
  {
    vtuber: "@HanamiyaChii",
    img: "../../assets/img/portfolio/schedules/WeeklySchedule.png",
    link: "https://twitter.com/HanamiyaChii",
  },
  {
    vtuber: "@moenaomii",
    img: "../../assets/img/portfolio/schedules/Moe-WeeklySchedule.png",
    link: "https://twitter.com/moenaomii",
  },
  {
    vtuber: "@ReinaHardgore",
    img: "../../assets/img/portfolio/schedules/Reina Hardgore-WeeklySchedulev2.png",
    link: "https://twitter.com/ReinaHardgore",
  },
];
