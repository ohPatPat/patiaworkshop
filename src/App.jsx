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

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function App() {
  return (
    <div id='Card'>
      <TRbolt />

      <Router>
        <Routes>
          <Route index element={<Home title={"Home"} />} />
          <Route path="/about" element={<About title={"About"} />} />
          <Route path="/menu" element={<Menu title={"Menu"} />} />
          <Route path="/logos" element={<Logos title={"Logos"} />} />
          <Route path="/overlays" element={<Overlays title={"Overlays"} />} />
          <Route path="/schedules" element={<Schedules title={"Schedules"} />} />
          <Route path="/tos" element={<TOS title={"TOS"} />} />
        </Routes>
      </Router>


      <BLbolt />
      <BRbolt />
    </div>
  );
}

export default App;
