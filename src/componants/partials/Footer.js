import logo from '../../logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
export default function Footer(){
    const { lightMode } = useContext(GlobalContext);
    return(
        <footer>
            <section className="newsletter">
               <div>
                    <h5>Vous recherchez votre maison de rêve ?</h5>
                    <p>Nous sommes là pour vous aider à transformer votre rêve d'une nouvelle maison en réalité.</p>
               </div>
               <div>
                    <a href="/" className="btn">Explorez</a>
               </div>
            </section>
            <section className='foot'>
                <div className="bloc">
                  <h6>Contact</h6>
                   <span className='opaque'><PhoneIcon/> +221 77 221 18 90</span>
                   <span className='opaque'><FmdGoodIcon/> 55 Bd David Diop, 10222 Dakar</span>
                   <ul className='rs'>
                        <li><a href="/"><FacebookIcon/></a></li>
                        <li><a href="/"><InstagramIcon/></a></li>
                        <li><a href="/"><YouTubeIcon/></a></li>
                        <li><a href="/"><LinkedInIcon/></a></li>
                   </ul>
                   <form className="newsletter-form">
                        <label>Newsletter</label>
                        <div className='input-group'>
                            <input type="text" placeholder='Entrer votre email'/>
                            <input type="submit" value='ok'/>
                        </div>
                    </form>
                </div>
                <div className="bloc">
                    <h6>Plan d'accès</h6>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        {/* <li><a href="/">Qui sommes-nous ?</a></li> */}
                        <li><a href="/">Propriétés</a></li>
                        <li><a href="/">Actualités</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="bloc">
                    <h6>Services</h6>
                    <ul>
                        <li><a href="/">Vente immobilier</a></li>
                        <li><a href="/">Location immobilier</a></li>
                        <li><a href="/">Achat immobilier</a></li>
                        <li><a href="/">Mise en relation</a></li>
                        <li><a href="/">Conseiller immobilier</a></li>
                    </ul>
                </div>
                <div className="bloc">
                    <h6>Autres infos</h6>
                    <ul>
                        <li><a href="/">Faq</a></li>
                        <li><a href="/">Service client</a></li>
                        <li><a href="/">Devenir partenaire</a></li>
                        <li><a href="/">Mentions légales</a></li>
                        <li><a href="/">Conditions d'utilisation</a></li>
                    </ul>
                </div>
            </section>
            <section className='signature'>
            <hr/>
                <div className='bloc'>
                    <img src={logo} alt="logo du site" />
                    <span className='opaque'>Plateforme N°1 des courtiers du Sénégal.</span>
                </div>
            </section>
            <section className='bottom'>
                <span className='opaque'>@Copyright 2024 - Tous droits réservés</span>
                <span className='opaque'>Plateforme nationale des courtiers</span>
            </section>
        </footer>
    )
}