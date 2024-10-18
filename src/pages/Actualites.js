import Header from '../componants/partials/Header.js';
import Blog from '../componants/Blog.js';
import Footer from '../componants/partials/Footer.js';
import { useEffect } from "react";

export default function Actualites() {
  const pageName = 'actualites', pageTitle = 'Actualités', pageSubTitle = 'La plateforme N°1 des immobiliers';
  useEffect(()=>{
  },[]);
  return(
      <div className="homepage">
          <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
          <Blog/>
          <Footer/>
      </div>
  );
}
