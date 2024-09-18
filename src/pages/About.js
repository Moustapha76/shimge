import Header from '../componants/partials/Header';
import { Image } from 'antd';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function About() {
  const pageName = 'about', pageTitle = 'Qui sommes-nous ?', pageSubTitle = 'La plateforme N°1 des immobiliers';
  useEffect(()=>{
  },[]);
  return(
      <div className="homepage">
          <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
          <main>
            <section className='about-inner'>
                  <div className='bloc-text' data-aos="fade-up" >
                      <h2 className='title sans'>CCPS<span className="subtitle">Qui sommes-nous ?</span></h2>
                      <div className='container'>
                        <p>CCPS SARL, aussi appelée Comptoir Commercial de Plomberie du Sénégal, est une entreprise leader dans l’importation et la distribution de produits de plomberie, de sanitaires, d’équipements industriels et de matériel d’irrigation. Depuis sa création en 2016, elle s’est imposée comme un acteur majeur au Sénégal et dans la sous-région grâce à son expertise, son dynamisme et ses partenariats internationaux.</p>
                        <p>Avec quatre showrooms idéalement situés à Dakar, CCPS SARL offre un accès facile à une large gamme de produits de qualité. Son équipe jeune et compétente met un point d’honneur à satisfaire les clients en leur offrant un service personnalisé et des conseils avisés.</p>
                        <p>La devise de l’entreprise, <strong>« LA SATISFACTION AU PRIX HALAL »</strong>, reflète son engagement à fournir des produits et services de qualité dans le respect des valeurs éthiques. Grâce à ses solides partenariats et à ses moyens logistiques modernes, CCPS SARL garantit une livraison rapide et efficace dans tout le pays.</p>
                        <p>Que vous soyez un professionnel ou un particulier, CCPS SARL vous invite à découvrir son univers de la plomberie et des sanitaires sous un nouveau jour. Visitez l’un de ses showrooms et laissez-vous guider par une équipe dévouée pour trouver les solutions adaptées à vos besoins.</p>
                      </div>
                  </div>
              </section>
              <section className='showroom'>
                <h2 className='title'>Nos showrooms<span className="subtitle">Disponible partout pour vous servir</span></h2>
                <div className='container'>
                  <Image.PreviewGroup
                          preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                          }} >
                          <div className='item'><Image src="../images/bg-1.jpg" alt="Rue VALMY X GALANDOU DIOUF" /><span>VDN (sacré cœur3 à côté de Good Rade)</span></div>
                          <div className='item'><Image src="../images/bg-3.jpg" alt="Rue FLEURUS X VALMY" /><span>Rue FLEURUS X VALMY</span></div>
                          <div className='item'><Image src="../images/bg-4.jpg" alt="Rue GRASLAND X VALMY" /><span>Rue GRASLAND X VALMY</span></div>
                          <div className='item'><Image src="../images/bg-5.jpg" alt="Rue TOLBIAC X FAIDHERBE" /><span>Rue TOLBIAC X FAIDHERBE</span></div>
                    </Image.PreviewGroup>
                </div>
              </section>
          </main>
          <Footer/>
      </div>
  );
}
