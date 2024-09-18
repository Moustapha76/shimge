import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import ShowProperty from '../componants/ShowProperty';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../componants/partials/GlobalContext";
import { useContext } from "react";
export default function Property(){
    const {id} = useParams();
    const index = id - 1;
    const { products } = useContext(GlobalContext);
    const property = products[index];
    const pageName = 'propriete', pageTitle = property.name, pageSubTitle = 'Plateforme N°1 des immobiliers';
    return <>
        <div className="properties">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <ShowProperty options={property} ></ShowProperty>
            <Footer/>
        </div>
    </>
}