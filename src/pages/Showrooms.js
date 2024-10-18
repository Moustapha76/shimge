import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";
import Showrooms from '../componants/Showrooms';

export default function Collection(){
    const pageName = 'Showrooms', pageTitle = 'Showrooms', pageSubTitle = 'Partout au Sénégal pour vous servir';
    useEffect(()=>{
    },[]);
    return(
        <div className="Showrooms">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <Showrooms/>
            <Footer/>
        </div>
    );
}