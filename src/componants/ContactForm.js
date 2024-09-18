export default function ContactForm(){
    return(
       <div className="bloc-contact">
            <section className="contact-form">
                <h2 className="title">Une question ? <span className="subtitle">N'hésitez pas à remplir ce formulaire de contact</span></h2>
                <form>
                <div className="form-group">
                        <div className="input-group">
                            <label for="name">Nom</label>
                            <input type="text" id="name" placeholder="Votre nom ou celle de l'entreprise"/>
                        </div>
                        <div className="input-group">
                            <label for="phone">Téléphone</label>
                            <input type="phone" id="phone" placeholder="Votre numéro de téléphone"/>
                        </div>
                </div>
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email"  placeholder="Votre adresse mail"/>
                    </div>
                    <div className="input-group">
                        <label for="message">Message</label>
                        <textarea cols="30" rows="10" placeholder="Votre message..."></textarea>
                    </div>
                    <input type="submit" className='btn-submit' value="Envoyer"/>
                </form>
            </section>
            <section className='map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61756.700021493765!2d-17.474443930468745!3d14.667642999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2268391467125779%3A0xf6ccfef350b6f6a7!2zS0VVUiBJTU1PIFPDiU7DiUdBTA!5e0!3m2!1sfr!2sma!4v1725357875575!5m2!1sfr!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
       </div>
    )
}