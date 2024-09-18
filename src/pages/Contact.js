import Header from '../componants/partials/Header';
import ContactForm from '../componants/ContactForm';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function Contact() {
  const pageName = 'contact', pageTitle = 'Contact', pageSubTitle = 'La plateforme N°1 des immobiliers';
  useEffect(()=>{
  },[]);
  return(
      <div className="contact">
          <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
          <ContactForm/>
          <Footer/>
      </div>
  );
}
