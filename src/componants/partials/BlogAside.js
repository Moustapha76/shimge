import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
export default function BlogAside(){
    const { topNews } = useContext(GlobalContext);
    return(
        <aside>
           <div className="bloc">
            <h3>Catégories</h3>
                <ul>
                    <li><a href="/actualites/categories/location">Location</a></li>
                    <li><a href="/actualites/categories/vente">Vente</a></li>
                    <li><a href="/actualites/categories/immobilier">Immobilier</a></li>
                    <li><a href="/actualites/categories/terrain">Terrain</a></li>
                    <li><a href="/actualites/categories/bureau">Bureau</a></li>
                    <li><a href="/actualites/categories/maison">Maison</a></li>
                    <li><a href="/actualites/categories/appartement">Appartement</a></li>
                </ul>
           </div>
          <div className="bloc">
            <h3>Meilleurs posts</h3>
            <div className="topNews">
                {topNews.map((article, key)=>{
                    return(
                    <div className="mini-article" key={key}>
                        <div className="min-img"><img src={article.image} alt={article.title} /></div>
                        <span>{article.title}<i>{article.pub}</i></span>
                    </div>
                    )
                })}
            </div>
          </div>
          <div className="bloc">
            <h3>Newsletter</h3>
            <form className="newsletter-form">
                <div className='input-group'>
                    <input type="text" placeholder='Entrer votre email'/>
                    <input type="submit" value='ok'/>
                </div>
            </form>
          </div>
        </aside>
    )
}