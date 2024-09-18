import Header from '../componants/partials/Header';
import Article from '../componants/Article';
import BlogAside from '../componants/partials/BlogAside';
import Footer from '../componants/partials/Footer';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../componants/partials/GlobalContext";
import { useContext, useEffect } from "react";

export default function ArticleItem(){
    const {id} = useParams();
    const index = id - 1;
    const { newsData } = useContext(GlobalContext);
    const infos = newsData[index];
    const pageName = 'actualite', pageTitle = 'Actualité', pageSubTitle = 'Découvrez nos actualités';
    useEffect(()=>{
    },[]);
    return(
        <div className={pageName}>
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <section className='new-detail'>
                <Article infos={infos} listOfNews={newsData.length}/>
                <BlogAside/>
            </section>
            <Footer/>
        </div>
    );
}
