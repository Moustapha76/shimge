import { CaretLeftOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';
export default function(props){
    const infos = props.infos;
    let prevNew = infos.id - 1, nextNew = infos.id + 1
    return(
        <article>
            <span className="date-pub">{infos.pub}</span>
            <h2 className="actu-title text-left">{infos.title}</h2>
            <div className="article-img">
                <img src={infos.image} alt={infos.title}/>
            </div>
            <div className="description">{infos.content}</div>
            <div className="btn-nav">
                {prevNew > 0 && <a href={`/actualites/${prevNew}`}><CaretLeftOutlined /> Article précédent</a>}
                {nextNew <= props.listOfNews && <a href={`/actualites/${nextNew}`}>Article suivant <CaretRightOutlined /></a>}
            </div>
        </article>
    )
}