export default function Footer(){

    const current_year = new Date().getFullYear()

    return(
        <footer>
            <div className="footer__content">
                <div>
                    <a href="/">© Мастер Крылов</a>
                    <span></span>
                </div>
                <div className="footer__social__icons">
                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/icons/whatsapp.svg `} alt=""/>
                    </a>

                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/icons/viber.svg `} alt=""/>
                    </a>

                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/icons/telegram.svg `} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
}