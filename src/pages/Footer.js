export default function Footer(){

    const current_year = new Date().getFullYear()

    return(
        <footer>
            <div className="footer__content">
                <div>
                    <a href="/">© Мастер Лебедев</a>
                    <span></span>
                </div>
                <div className="footer__social__icons">
                    <a href="https://wa.me/79879009975">
                        <img src={`${process.env.PUBLIC_URL}/icons/whatsapp.svg `} alt=""/>
                    </a>

                    <a href="viber://chat?number=%2B79879009975">
                        <img src={`${process.env.PUBLIC_URL}/icons/viber.svg `} alt=""/>
                    </a>

                    <a href="tg://resolve?domain=grinch_master">
                        <img src={`${process.env.PUBLIC_URL}/icons/telegram.svg `} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
}