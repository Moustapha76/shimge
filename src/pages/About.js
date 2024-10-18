import Header from '../componants/partials/Header';
import { Image } from 'antd';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function About() {
  const pageName = 'about', pageTitle = "L'entreprise", pageSubTitle = '';
  useEffect(()=>{
  },[]);
  return(
      <div className="homepage">
          <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
          <main>
            <section className='about'>
                  <div className='bloc-left' data-aos="fade-up" >
                      <h2 className='title sans'>CCPS<span className="subtitle">Qui sommes-nous ?</span></h2>
                      <div className='container scollbar'>
                        <p>CCPS SARL, aussi appelée Comptoir Commercial de Plomberie du Sénégal, est une entreprise leader dans l’importation et la distribution de produits de plomberie, de sanitaires, d’équipements industriels et de matériel d’irrigation. Depuis sa création en 2016, elle s’est imposée comme un acteur majeur au Sénégal et dans la sous-région grâce à son expertise, son dynamisme et ses partenariats internationaux.</p>
                        <p>Avec quatre showrooms idéalement situés à Dakar, CCPS SARL offre un accès facile à une large gamme de produits de qualité. Son équipe jeune et compétente met un point d’honneur à satisfaire les clients en leur offrant un service personnalisé et des conseils avisés.</p>
                        <p>La devise de l’entreprise, <strong>« LA SATISFACTION AU PRIX HALAL »</strong>, reflète son engagement à fournir des produits et services de qualité dans le respect des valeurs éthiques. Grâce à ses solides partenariats et à ses moyens logistiques modernes, CCPS SARL garantit une livraison rapide et efficace dans tout le pays.</p>
                        <p>Que vous soyez un professionnel ou un particulier, CCPS SARL vous invite à découvrir son univers de la plomberie et des sanitaires sous un nouveau jour. Visitez l’un de ses showrooms et laissez-vous guider par une équipe dévouée pour trouver les solutions adaptées à vos besoins.</p>
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
              <section className='showroom'>
                <h2 className='title'>Nos produits<span className="subtitle"></span></h2>
                <div className='container'>
                  <Image.PreviewGroup
                          preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                          }} >
                          <div className='item'><Image src="../images/toilet-1.jpg" alt="Sanitaire" /><a href=''>Sanitaire</a></div>
                          <div className='item'><Image src="../images/plumbing.jpg" alt="Plomberie"/><a href=''>Plomberie</a></div>
                          <div className='item'><Image src="../images/productbanner.jpg" alt="Shimge" /><a href=''>Shimge</a></div>
                          <div className='item'><Image src="../images/pvcc.jpg" alt="PVC" /><a href=''>PVC</a></div>
                    </Image.PreviewGroup>
                </div>
              </section>
          </main>
          <Footer/>
      </div>
  );
}
