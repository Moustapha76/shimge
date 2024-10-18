import { useContext, useEffect } from 'react';
import { GlobalContext } from "./GlobalContext";
import { Carousel } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HouseIcon from '@mui/icons-material/House';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ChairIcon from '@mui/icons-material/Chair';
import AOS from 'aos';
import { Image } from 'antd';

  export default function Main(){
    const { members, partenaires } = useContext(GlobalContext);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée de l'animation en millisecondes
          once: true,     // Si true, l'animation ne se déclenche qu'une seule fois
        });
      }, []);
    return (
        <main>  
            <section className='about'>
                <div className='bloc-left' data-aos="fade-up" >
                    <h2 className='title sans'>CCPS<span className="subtitle">Qui sommes-nous ?</span></h2>
                    <div className='container scollbar'>
                        <p>CCPS SARL, aussi appelée Comptoir Commercial de Plomberie du Sénégal, est une entreprise leader dans l’importation et la distribution de produits de plomberie, de sanitaires, d’équipements industriels et de matériel d’irrigation. Depuis sa création en 2016, elle s’est imposée comme un acteur majeur au Sénégal et dans la sous-région grâce à son expertise, son dynamisme et ses partenariats internationaux.</p>
                        <p>Avec quatre showrooms idéalement situés à Dakar, CCPS SARL offre un accès facile à une large gamme de produits de qualité. Son équipe jeune et compétente met un point d’honneur à satisfaire les clients en leur offrant un service personnalisé et des conseils avisés…</p>
                    </div>
                    <a className='btn' href='/qui-sommes-nous'>Lire plus</a>
                </div>
                <div className='bloc-right' data-aos="fade-up" >
                    <Image.PreviewGroup
                        preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }} >
                        <Image src="../images/toilet-5.jpg" alt="" />
                        <Image src="../images/toilet-1.jpg" alt="" />
                    </Image.PreviewGroup>
                </div>
            </section>
            <section className='advantages'>
                <h2 className="title" data-aos="fade-up" >Pourquoi nous choisir ? <span className="subtitle">Nous offrons un service complet à chaque étape.</span></h2>
                <div className='container' data-aos="fade-up" >
                    <div className='item'>
                        <span className='icone'><LocationCityIcon/></span>
                        <span>Qualité</span>
                        <p>Nos produits sont de bonnes qualités qui résistent à tout et sont durables.</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><HouseIcon/></span>
                        <span>Prix compétitifs</span>
                        <p>Découvrez les meilleurs outils à des prix imbattables uniquement chez CCPS.</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><HomeWorkIcon/></span>
                        <span>Professionalisme</span>
                        <p>Nous travaillons avec des professionnels du métier depuis 2016.</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><ChairIcon/></span>
                        <span>Satisfaction client</span>
                        <p>Nous sommes toujours là pour satisfaire nos clients les plus exigents.</p>
                    </div>
                </div>
            </section>
            <section className='featured' data-aos="fade-up" >
                <h2 className="title">Nos produits <span className="subtitle">Les meilleurs produits chez CCPS</span></h2>
                <div className='container'>
                    <Carousel dots={true} arrows={true} autoplay={true} infinite={true} slidesToShow={3} draggable={true} >
                        <a href='/' className='card' id="">
                            <img src="../images/plomberie.jpg" alt="Plomberie" />
                            <div className='infos'>
                                <span className='titre'>Plomberie</span>
                            </div>
                        </a>
                        <a href='/' className='card' id="">
                            <img src="../images/shimge.jpg" alt="shimge" />
                            <div className='infos'>
                                <span className='titre'>Pompes Shimge</span>
                            </div>
                        </a>
                        <a href='/' className='card' id="">
                            <img src="../images/sanitaire.jpg" alt="Sanitaire" />
                            <div className='infos'>
                                <span className='titre'>Sanitaire</span>
                            </div>
                        </a>
                        <a href='/' className='card' id="">
                            <img src="../images/pvc.jpg" alt="PVC" />
                            <div className='infos'>
                                <span className='titre'>PVC</span>
                            </div>
                        </a>
                    </Carousel>
                </div>
            </section>
            <section className='propertypercity'>
                <h2 className='title'>Notre équipe<span className="subtitle">L'équipe derrière CCPS.</span></h2>
                <div className='container'>
                    {members.map((member, key)=>{
                        return(
                            <a href='/' className='city-card' key={key}>
                                <div className='city-card-img'><img src={member.image} alt={member.name} /></div>
                                <div className='city-card-info'>
                                    <span><strong>{member.name}</strong></span>
                                    <span>{member.profession}</span>
                                    <div className='rs'></div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
            <section className='favoris' data-aos="fade-up" >
                <div className='bloc-left'>
                    <h2 className='title sans'>CCPS - SHIMGE<span className="subtitle">Partenaire officiel SHIMGE</span></h2>
                    <h3>Nous sommes en partenariat avec SHIMGE depuis 2016</h3>
                    <p> Depuis sa création en 2016,Comptoir Commercial de Plomberie du Sénégal s’engage activement à promouvoir une gestion responsable de l’eau, une production de qualité et le respect de l’environnement.</p>
                    <p>Pour atteindre ces objectifs, CCPS a établi un partenariat stratégique avec Shimge Pump Industry Group Co., leader chinois dans la fabrication de pompes et d’équipements de contrôle.Shimge, fort de trois décennies d’expertise dans la recherche, la fabrication et la vente de pompes de haute qualité, propose une gamme complète de produits, incluant des pompes submersibles, des pompes de surface, des pompes de puits et des pompes à moteur.</p>
                    <p>Avec l’objectif de fournir les meilleures solutions de pompage et de traitement de l’eau à l’échelle mondiale et de contribuer à une meilleure qualité de vie pour tous, Shimge fait confiance à CCPS, son distributeur exclusif depuis 2016.</p>
                    <button className='btn'>Devenir partenaire</button>
                </div>
                <div className='bloc-right'>
                    <Image src="../images/shimge.jpg" alt="" ></Image>
                </div>
            </section>
            <section className='news' data-aos="fade-up" >
            <h2 className='title'>Actualités<span className="subtitle">Nos dernières actualités.</span></h2>
            <div className='container'>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/Blog/blog-1.jpg" alt="" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Meilleure inspiration de design intérieure</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/1">Lire +</a>
                        </div>
                    </div>
                </div>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/Blog/blog-2.jpg" alt="" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Top 5 des meilleures immobiliers du Sénégal</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/2">Lire +</a>
                        </div>
                    </div>
                </div>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/Blog/blog-3.jpg" alt="" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Villa à vendre aux almadies</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/3">Lire +</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className='partenaires' data-aos="fade-up" >
                <h2 className='title'>Nos partenaires<span className="subtitle">Nous travaillons uniquement avec les meilleures entreprises.</span></h2>
                <div className='container'>
                    {partenaires.map((partenaire, key)=>{
                        return(
                            <a href={partenaire.link} id={key} className='logo-item'><img src={partenaire.image} alt={partenaire.name}/></a>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}