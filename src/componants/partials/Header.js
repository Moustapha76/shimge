export default function Header(props){
    return(
        <div className={`header${props.page !== 'home' ? ' interne' : ''}`} id={props.page}>
            <div className="banner">
                <div className="slogan">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
                <div className="btn-group">
                    <a href="/" className="btn">Appelez-nous</a>
                    <a href="/contact" className="btn">Contactez-nous</a>
                </div>
            </div>
        </div>
    )
}