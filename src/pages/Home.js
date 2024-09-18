import Header from '../componants/partials/Header';
import Main from '../componants/partials/Main';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function Home(){
    const pageName = 'home', pageTitle = 'CCPS', pageSubTitle = 'Comptoir Commercial de Plomberie du Sénégal';
    useEffect(()=>{
    },[]);
    return(
        <div className="homepage">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <Main/>
            <Footer/>
        </div>
    );
}