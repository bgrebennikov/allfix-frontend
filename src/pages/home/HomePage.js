import {Link, useParams} from "react-router-dom";
import {useState} from "react";


export default function HomePage() {

    const {brand} = useParams()

    const [repairItems] = useState([
        {
            image: `${process.env.PUBLIC_URL}/repair_items/laptop.png`,
            title: "РЕМОНТ КОМПЬЮТЕРНОЙ ТЕХНИКИ",
            description: "Ремонт ноутбуков\n" +
                "Ремонт компьютеров\n" +
                "Ремонт моноблоков\n" +
                "Ремонт видеокарт\n" +
                "Восстановление данных\n" +
                "Ремонт материнских плат\n" +
                "Ремонт ИБП\n" +
                "Ремонт серверов",
            discount: 30,
        },
        {
            image: `${process.env.PUBLIC_URL}/repair_items/washing.png`,
            title: "РЕМОНТ СТИРАЛЬНЫХ МАШИН",
            description: "Ремонт ноутбуков\n" +
                "Ремонт компьютеров\n" +
                "Ремонт моноблоков\n" +
                "Ремонт видеокарт\n" +
                "Восстановление данных\n" +
                "Ремонт материнских плат\n" +
                "Ремонт ИБП\n" +
                "Ремонт серверов",
            discount: null
        },
        {
            image: `${process.env.PUBLIC_URL}/repair_items/fridge.png`,
            title: "РЕМОНТ СТИРАЛЬНЫХ МАШИН",
            description: "Ремонт ноутбуков\n" +
                "Ремонт компьютеров\n" +
                "Ремонт моноблоков\n" +
                "Ремонт видеокарт\n" +
                "Восстановление данных\n" +
                "Ремонт материнских плат\n" +
                "Ремонт ИБП\n" +
                "Ремонт серверов",
            discount: null
        },
        {
            image: `${process.env.PUBLIC_URL}/repair_items/tv.png`,
            title: "РЕМОНТ КОМПЬЮТЕРНОЙ ТЕХНИКИ",
            description: "Ремонт ноутбуков\n" +
                "Ремонт компьютеров\n" +
                "Ремонт моноблоков\n" +
                "Ремонт видеокарт\n" +
                "Восстановление данных\n" +
                "Ремонт материнских плат\n" +
                "Ремонт ИБП\n" +
                "Ремонт серверов",
            discount: 15
        }
    ])

    console.log(brand)

    return (
        <>
            <section className="section__home">
                <div className="section__content__center">
                    <h1 className="title__home">

                        {(() => {
                            if (brand !== undefined) {
                                return (
                                    <>
                                        <span className="text-yellow">Ремонт </span>
                                        <br/> техники {brand}
                                    </>
                                )
                            }

                            return (
                                <>
                                    <span className="text-yellow">Ремонт </span>
                                    бытовой <br/> техники и электроники
                                </>
                            )

                        })()}
                    </h1>
                    <h3 className="subtitle__home">
                        от частного мастера
                    </h3>

                    <form action="/" className="section__home__form">
                        <div className="home__form__title">
                            Бесплатно выясню причину поломки и озвучу стоимость работ
                        </div>

                        <input type="text" name="customer_name" id="customer_name_field"
                               placeholder="Ваше имя"
                        />

                        <input type="number" name="customer_phone" id="customer_phone"
                               placeholder="Номер телефона"
                        />

                        <input type="submit" className="btn__big__yellow"
                               value={"Получить консультацию"}/>

                    </form>
                </div>
                <div className="section__image">
                    <img src={`${process.env.PUBLIC_URL}/master_main.png`} alt=""/>
                </div>
                <div className="section__divider">

                </div>
            </section>

            <section className="section__repair__items">
                <h3 className="section__title__medium repair__items__title">Ремонтирую любую технику</h3>

                <div className="repair__items__list">
                    {repairItems.map((item, index) => {
                        return (
                            <div key={index} className="repair__item__card">
                                <div className="rc__photo">
                                    {(() => {
                                        if (item.discount !== null) {
                                            return (
                                                <div className="rc__discount">
                                                    <div className="rc__image__overlay"></div>
                                                    <div className="prompt">
                                                        <div className="prompt__content">
                                                            Скидка при заказе услуги через сайт
                                                        </div>
                                                    </div>
                                                    <span className="rc__discount__btn">Скидка {item.discount}%</span>
                                                </div>
                                            )
                                        }
                                    })()}
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="repair__card__content">
                                    <p className="rc__title">{item.title}</p>
                                    <div className="rc__description">
                                        {item.description}
                                    </div>
                                    <Link href={"#"} to={null} className="rc__call__master__link">
                                        <div className="rc__call__master__btn">
                                            Вызвать мастера
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        )
                    })}
                </div>

            </section>

            <section className="section__helper">
                <h1 className="text-blue">Не нашли свой вид техники?</h1>
                <p>Тогда, звоните или оставляйте заявку
                    я проконсультирую Вас по всем услугам</p>

                <Link to={null} href="#" type="submit" className="btn__big__yellow sh__ask__btn">
                    Задать вопрос
                </Link>

            </section>

            <section className="section__principles">
                <h1 className="sp__title">
                    Мои <span className="text-blue">принципы</span>
                </h1>
                <div className="sp__list">
                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/finger_up.png`}
                             className={"sp__item__image"}  alt=""/>
                        <div className="sp__item__title">
                            Клиент всегда прав
                        </div>
                        <div className="sp__item__index">
                            1
                        </div>
                    </div>

                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/like.png`}
                             className={"sp__item__image"}  alt=""/>
                        <div className="sp__item__title">
                            Высокое качество работы - Основа успеха
                        </div>
                        <div className="sp__item__index">
                            2
                        </div>
                    </div>

                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/agree.png`}
                             className={"sp__item__image"}  alt=""/>
                        <div className="sp__item__title">
                            Лучшая реклама
                            - довольный клиент
                        </div>
                        <div className="sp__item__index">
                            3
                        </div>
                    </div>

                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/ok.png`}
                             className={"sp__item__image"}  alt=""/>
                        <div className="sp__item__title">
                            Мало быть профессионалом
                            - надо ещё делать на совесть
                        </div>
                        <div className="sp__item__index">
                            4
                        </div>
                    </div>
                </div>
            </section>

            <section className="section__warranty">
                <div className="section__warranty__content">

                    <div className="sw__content__left">
                        <div className="sw__top">
                            <div className="sw__title">Обратите внимание</div>
                            <div className="sw__content__subtitle">На статистику за последние 10 лет
                            </div>
                        </div>
                        <div className="sw__mid">
                            <h1 className="sw__value__large">93%</h1>
                        </div>
                        <div className="sw__bottom">
                            <div className="sw__title">
                                Клиентов
                            </div>
                            <div className="sw__content__bottom__subtitle">
                                Делают выбор в пользу частных мастеров потому что это существенно снижает стоимость ремонта!
                            </div>
                        </div>
                    </div>

                    <div className="sw__content__right">
                        <div className="sw__top">
                            <div className="sw__title">
                                Для каждого клиента
                            </div>
                            <div className="sw__content__subtitle">Я предоставляю</div>
                        </div>
                        <div className="sw__mid">
                            <h1 className="sw__value__large">3<span>Года</span>  </h1>
                        </div>
                        <div className="sw__bottom">
                            <div className="sw__title">Гарантии</div>
                            <div className="sw__content__bottom__subtitle">Я очень дорожу своей репутацией и доверием клиентов! Бесплатно отремонтирую вашу технику, если она повторно сломается в течении 3х лет!
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}