import "./App.css";
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from './pages/Home';
import  About from './pages/About';
import Proprieties from './pages/Properties';
import Property from './pages/Property';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import { useEffect, useState, useRef, useContext } from "react";
// import { UserOutlined } from '@ant-design/icons';
import Resultat from "./pages/Resultat";
import Article from "./pages/ArticleItem";
import { Switch } from 'antd';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { GlobalContext } from "./componants/partials/GlobalContext";
import Properties from "./componants/Properties";

export default function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const myApp = useRef(null);
  const { lightMode, setLightMode } = useContext(GlobalContext);
  const changeTheme = (checked) => {
    setLightMode(checked);
    myApp.current.classList.toggle('darkmode');
  };
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div className='App' ref={myApp}>
      <Router>
        <div className={`navbar${scrollY>0 ? ' fixed' : ''}`}>
          <navbar>
            <a href="/"><img src={logo} alt="logo" className="logo"/></a>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/qui-sommes-nous">L'entreprise</NavLink>
                </li>
                <li>
                  <NavLink to="/proprietes">Pompe SHIMGE</NavLink>
                </li>
                <li>
                  <NavLink to="/actualites">Actualités</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="dropdown"> 
                    <NavLink to="/nos-produits">
                    <a className="dropbtn" onClick={toggleDropdown}>
                      Services
                    </a>
                    {dropdownOpen && (
                      <ul className="dropdown-content">
                        <li><NavLink to="/nos-produits/plomberie">Plomberie</NavLink></li>
                        <li><NavLink to="/nos-produits/sanitaire">Sanitaire</NavLink></li>
                        <li><NavLink to="/nos-produits/pvc">PVC</NavLink></li>
                      </ul>
                    )}
                    </NavLink>
                </li>
                <li>
                  <NavLink to="/resultat">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className="themeMode">
            <Switch onChange={changeTheme} />
            <WbSunnyIcon/>
            </div>
          </navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/proprietes" element={<Proprieties />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resultat" element={<Resultat />} />
          <Route path="/proprietes/details/:id" element={<Property />} />
          <Route path="/proprietes/details/" element={<Property />} />
          <Route path="/nos-produits/:label" element={<Properties />} />
        </Routes>
      </Router>
    </div>
  );
}
