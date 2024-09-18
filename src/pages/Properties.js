import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";
import Properties from '../componants/Properties';

export default function Collection(){
    const pageName = 'properties', pageTitle = 'Nos propriétés', pageSubTitle = 'Appartements, maisons, studios, chambres,...';
    useEffect(()=>{
    },[]);
    return(
        <div className="properties">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <Properties/>
            <Footer/>
        </div>
    );
}