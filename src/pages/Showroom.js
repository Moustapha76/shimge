import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import ShowShowroom from '../componants/ShowShowroom';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../componants/partials/GlobalContext";
import { useContext } from "react";
export default function Property(){
    const {id} = useParams();
    const index = id - 1;
    const { showroomslist } = useContext(GlobalContext);
    const showroom = showroomslist[index];
    const pageName = '', pageTitle = '', pageSubTitle = '';
    return <>
        <div className="properties">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
                <ShowShowroom options={showroom}></ShowShowroom>
            <Footer/>
        </div>
    </>
}