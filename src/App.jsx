import { NavLink } from 'react-router-dom';
import './App.scss';
import { TLbolt, TRbolt, BLbolt, BRbolt } from './components/bolt_icons/BoltIcons';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { About } from './pages/about/About'
import { Home } from './pages/home/Home'
import { Logos } from './pages/logos/Logos'
import { Menu } from './pages/menu/Menu'
import { Overlays } from './pages/overlays/Overlays'
import { Schedules } from './pages/schedules/Schedules'
import { TOS } from './pages/tos/TOS'
import { Error } from './pages/error/Error'
import { Flower } from './components/loader/Flower'


const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function App() {
  return (
    <>
    <Flower></Flower>
      <div id='Card'>
        <TRbolt />

        <Router>
          <Routes>
            <Route index element={<Home title={"Patia's workshop | Front page"} />} />
            <Route path="/aboutMe" element={<About title={"Patia's workshop | About me page"} />} />
            <Route path="/menu" element={<Menu title={"Patia's workshop | Inventory page"} />} />
            <Route path="/logos" element={<Logos title={"Patia's workshop | Logo commission page"} />} />
            <Route path="/overlays" element={<Overlays title={"Patia's workshop | Overlays commission page"} />} />
            <Route path="/schedules" element={<Schedules title={"Patia's workshop | Schedules commission page"} />} />
            <Route path="/tos" element={<TOS title={"Patia's workshop | TOS page"} />} />
            <Route path="*" element={<Error title={"Patia's workshop | lkjgljf page"} />} />
          </Routes>
        </Router>


        <BLbolt />
        <BRbolt />
      </div>
    </>
  );
}

export default App;
