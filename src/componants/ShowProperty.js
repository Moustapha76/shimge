import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import {
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    UndoOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
  } from '@ant-design/icons';
  import { Image, Space } from 'antd';
export default function ShowProperty(props){
    const options = props.options;
    // const id = options.id;
    const name = options.name;
    const price = options.price;
    const image = options.image;
    // const statut = options.statut;
    const bed = options.bed;
    const room = options.room;
    const location = options.location;
    const type = options.type;

    const onDownload = (imgUrl) => {
        fetch(imgUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'image.png';
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            link.remove();
          });
      };

    return(
        <section className="propertyDetails">
            <div className="head-section">
                <h2>{name}<span className="subtitle">{location}</span></h2>
                <span className="price">{price} FcFa</span>
            </div>
            <div className="description">
                <div className="details">
                    <div className='caracteristiques'>
                        <span>{type}</span>
                        <span><strong><MeetingRoomIcon/></strong> Chambres : {room}</span>
                        <span><strong><SingleBedIcon/></strong> Lits : {bed}</span>
                    </div>
                    <div className="resume">
                        <h3>Résumé</h3>
                        <div className="text">
                            <p>La tour Evans est très demandée, avec un appartement en angle de type "junior" d'une chambre, doté d'un grand balcon offrant une vue panoramique complète sur New York. Les vues sont à couper le souffle, il faut les voir pour y croire. L'appartement est en parfait état, avec de nouveaux parquets en bois. Il dispose de nombreux placards ainsi que d'une machine à laver et d'un sèche-linge.</p>
                            <p>Entièrement meublé et élégamment aménagé, ce condominium est situé dans un emplacement de premier choix. Le hall d'entrée spacieux mène à un grand salon avec coin repas. Ce vaste appartement de 2 chambres et 2 salles de bain en marbre rénovées est doté de grandes fenêtres. Bien que les vues soient intérieures, les expositions sud et est permettent à une belle lumière naturelle d'illuminer chaque pièce. La suite principale est entourée de boiseries artisanales et dispose d'un incroyable dressing et d'espaces de rangement.</p>
                            <p>La deuxième chambre est une pièce d'angle avec des fenêtres doubles. La cuisine offre un espace fabuleux, des appareils électroménagers neufs et un coin buanderie. Parmi les autres caractéristiques, on trouve des parquets en chevrons, des moulures couronnées et des plafonds à caissons dans tout l'appartement. Le 1049 5th Avenue est un bâtiment classique d'avant-guerre situé en face de Central Park, du réservoir et du Metropolitan Museum. Le lobby est élégant et il y a un service de conciergerie 24 heures sur 24. C'est un immeuble qui accepte les animaux.</p>
                        </div>
                        <h3>Aménagements</h3>
                        <ul>
                            <li>Air conditionné </li><li>Sèche-linge </li><li>Gym</li><li>Blanchisserie </li><li>Gazon</li><li>Micro-ondes</li><li>Réfrigérateur</li><li>Sauna</li><li>Piscine </li><li>TV  </li><li>Lave-linge</li><li> WiFi </li><li>Couvercles de Fenêtre</li>
                        </ul>
                        <h3>Matériaux de construction</h3>
                        <ul><li>Ciment</li><li>Bois</li><li>Carreaux</li></ul>
                        <h3>Photos</h3>
                        <div className='photo'>
                            {/* <img src={`/${image}`} alt={name}/> */}
                            <Image
                                width={'100%'}
                                height={400}
                                src={`/${image}`}
                                preview={{
                                toolbarRender: (_,
                                    {
                                    image: { url },
                                    transform: { scale },
                                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset },
                                    },
                                ) => (
                                    <Space size={12} className="toolbar-wrapper">
                                    <DownloadOutlined onClick={() => onDownload(image)} />
                                    <SwapOutlined rotate={90} onClick={onFlipY} />
                                    <SwapOutlined onClick={onFlipX} />
                                    <RotateLeftOutlined onClick={onRotateLeft} />
                                    <RotateRightOutlined onClick={onRotateRight} />
                                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                                    <UndoOutlined onClick={onReset} />
                                    </Space>
                                ),
                                }}
                            />
                        </div>
                        <h3>Location</h3>
                        <div className='plan'>
                            <iframe title='zone' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26590.164474186917!2d-7.628926710364635!3d33.585306007367166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d284d7ccd05f%3A0xd0a597e123812ee5!2sHyatt%20Regency%20Casablanca!5e0!3m2!1sfr!2sma!4v1725961715150!5m2!1sfr!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="contact-section">
                   <div className='fixedcontent'>
                        <div className='profil'>
                           <div className='header-profil'>
                            <div className='img-profil'><img src="../../images/profil.webp" alt="profil"/></div>
                                <div className='info-profil'>
                                    <span>Moustapha Diouf</span>
                                    <span>+212 33 332 3332</span>
                                    <span>contact@gmail.com</span>
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