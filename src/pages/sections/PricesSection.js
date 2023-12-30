


export default function PricesSection(){
    return(
        <section className={"section__prices"}>
            <h1>Цены на ремонт стиральных машин</h1>
            <ul className={"section__price__list"}>
                <li className={"sdv__price__item"}>
                    <div className="sdv__price__item__icon">
                        <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                    </div>
                    <div className="sdv__price__item__body">
                        <h4>Малый ремонт</h4>
                        <p>От 500 Рублей</p>
                    </div>
                </li>

                <li className={"sdv__price__item"}>
                    <div className="sdv__price__item__icon">
                        <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                    </div>
                    <div className="sdv__price__item__body">
                        <h4>Ремонт средней сложности</h4>
                        <p>От 1 500 Рублей</p>
                    </div>
                </li>

                <li className={"sdv__price__item"}>
                    <div className="sdv__price__item__icon">
                        <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                    </div>
                    <div className="sdv__price__item__body">
                        <h4>Сложный ремонт</h4>
                        <p>От 3 000 Рублей</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}