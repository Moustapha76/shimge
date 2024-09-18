import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function Resultat() {
  const pageName = 'resultat', pageTitle = 'Page de recherche', pageSubTitle = 'Trouvez le type de propriété qui vous correspond';
  useEffect(()=>{},[]);
  return(
      <div className="homepage">
          <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>   
          <Footer/>
      </div>
  );
}
