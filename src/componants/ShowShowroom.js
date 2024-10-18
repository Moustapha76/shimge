export default function ShowShowroom(props){
    const options = props.options;
    return(
        <section className="propertyDetails">
            <div className="head-section">
                <h2>{options.lieu}<span className="subtitle">{options.adresse}</span></h2>
            </div>
            <div className="description">
            <div className="details">
                    <div className='caracteristiques'>
                        <h2></h2>
                    </div>
                    <div className="resume">
                        <h3>Description</h3>
                        <div className="text">{options.description}</div>
                        <h3>Compositions</h3>
                        <ul>
                            <li>Air conditionné </li><li>Sèche-linge </li><li>Gym</li><li>Blanchisserie </li><li>Gazon</li><li>Micro-ondes</li><li>Réfrigérateur</li><li>Sauna</li><li>Piscine </li><li>TV  </li><li>Lave-linge</li><li> WiFi </li><li>Couvercles de Fenêtre</li>
                        </ul>
                        <h3>Services distribués</h3>
                        <ul><li>Sanitaire</li><li>Plomberie</li><li>Quincaillerie</li></ul>
                        <h3>Vidéos</h3>
                        <div className='photo'>{options.movie}</div>
                        <h3>Location</h3>
                        <div className='plan'>{options.plan}</div>
                    </div>
                </div>
                <div className="contact-section">
                   <div className='fixedcontent'>
                        <div className='profil'>
                           <div className='header-profil'>
                            <div className='img-profil'><img src="../../images/profil.webp" alt="profil"/></div>
                                <div className='info-profil'>
                                    <span>Gérant</span>
                                    <span>{options.gerant}</span>
                                    <span>{options.tel}</span>
                                </div>
                           </div>
                            <form>
                                <input type="text" placeholder='Nom'/>
                                <input type="email" placeholder='Email'/>
                                <input type="phone" placeholder='Téléphone'/>
                                <textarea cols="30" rows="10" placeholder='Message'></textarea>
                                <input type="submit" className='btn-submit' value="Envoyer"/>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}