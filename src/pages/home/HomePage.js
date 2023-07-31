import "react-slideshow-image/dist/styles.css";
import {Slide} from 'react-slideshow-image';
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

    const reviewImages = [
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`
    ];

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
                             className={"sp__item__image"} alt=""/>
                        <div className="sp__item__title">
                            Клиент всегда прав
                        </div>
                        <div className="sp__item__index">
                            1
                        </div>
                    </div>

                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/like.png`}
                             className={"sp__item__image"} alt=""/>
                        <div className="sp__item__title">
                            Высокое качество работы - Основа успеха
                        </div>
                        <div className="sp__item__index">
                            2
                        </div>
                    </div>

                    <div className="sp__list__item">
                        <img src={`${process.env.PUBLIC_URL}/principles/agree.png`}
                             className={"sp__item__image"} alt=""/>
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
                             className={"sp__item__image"} alt=""/>
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
                                Делают выбор в пользу частных мастеров потому что это существенно снижает стоимость
                                ремонта!
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
                            <h1 className="sw__value__large">3<span>Года</span></h1>
                        </div>
                        <div className="sw__bottom">
                            <div className="sw__title">Гарантии</div>
                            <div className="sw__content__bottom__subtitle">Я очень дорожу своей репутацией и доверием
                                клиентов! Бесплатно отремонтирую вашу технику, если она повторно сломается в течении 3х
                                лет!
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="section__advantages">
                <h1 className="sa__title">
                    Цены ниже срединих на <span className={"text-blue"}>30%</span>
                </h1>

                <div className="sa__content">
                    <div className="sa__content__left">

                        <div className="sa__advantages__list">
                            <div className="sa__advantage__item">

                                <div className="sa__item__image">
                                    <img src={`${process.env.PUBLIC_URL}/advantages/weight.png`} alt=""/>
                                    <div className="sa__item__image__overlay"></div>
                                </div>

                                <div className="sa__item__body">
                                    <div className="sa__item__title">
                                        Справедливая оценка работы
                                    </div>

                                    <div className="sa__item__description">
                                        Я не пытаюсь раскрутить на завышенную стоимость, а ремонтирую за адекватную и
                                        доступную цену
                                    </div>
                                </div>

                            </div>
                            <div className="sa__advantage__item">

                                <div className="sa__item__image">
                                    <img src={`${process.env.PUBLIC_URL}/advantages/recomend.png`} alt=""/>
                                    <div className="sa__item__image__overlay"></div>
                                </div>

                                <div className="sa__item__body">
                                    <div className="sa__item__title">
                                        Ориентация на рекомендации
                                    </div>

                                    <div className="sa__item__description">
                                        Благодаря низким ценам и качественной работе многие меня рекомендуют, а
                                        "сарафанное радио" - лучшая реклама
                                    </div>
                                </div>

                            </div>
                            <div className="sa__advantage__item">

                                <div className="sa__item__image">
                                    <img src={`${process.env.PUBLIC_URL}/advantages/board.png`} alt=""/>
                                    <div className="sa__item__image__overlay"></div>
                                </div>

                                <div className="sa__item__body">
                                    <div className="sa__item__title">
                                        Запчасти по низким ценам
                                    </div>

                                    <div className="sa__item__description">
                                        Я закупаю запчасти напрямую у производителей в том числе за границей, что
                                        позволяет существенно снизить стоимость ремонта без потерии качаства
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="sa__content__right">
                        <form action="/" className="sa__form">
                            <h1 className="sa__form__title text-blue">
                                Убедитесь<br/>в доступности моих цен!
                            </h1>

                            <div className="sa__form__inputs">
                                <input type="text" name="repair_reason" id="repair_reason"
                                       placeholder={"Опишите поломку"}
                                />

                                <input type="number" name="repair_reason" id="repair_reason"
                                       placeholder={"Укажите телефон"}
                                />
                            </div>

                            <button className={"btn__big__yellow"}>Узнать цену</button>

                            <img className={"drill_image"} src={`${process.env.PUBLIC_URL}/advantages/drill.png`}
                                 alt=""/>

                        </form>
                    </div>
                </div>

            </section>

            <section className="section__about">
                <h1 className="sa__title">
                    Дипломированный инженер
                </h1>
                <p className="sa__subtitle">
                    Профессионализм и высокий уровень обслуживания
                </p>

                <div className="sab__content">
                    <div className="sab__content__line"></div>
                    <div className="sab__master__photo">
                        <img src={`${process.env.PUBLIC_URL}/about/master_photo.png`} alt=""/>
                    </div>
                    <div className="sab__master__content">
                        <div className="sab__content__body">
                            <p>
                                Моя основная цель, сделать не дорого, но качественно, чтобы вы остались довольны и
                                рекомендовали меня своим близким.
                            </p>

                            <p>
                                Я всегда рад помочь своим клиентам и ищу лучшее решение для них!Обращайтесь вы не
                                пожалеете
                                точно!
                            </p>
                            <p>
                                Могу вас заверить, что вы будете в восторге от произведенного ремонта и цена вас
                                порадует.
                            </p>

                        </div>

                        <div className="sab__content__sign">
                            <span className={"sign__name text-blue"}>Георгий Крылов</span>
                            <span>Опыт работы - 10 лет</span>
                        </div>

                    </div>
                </div>

            </section>

            <section className="section__reviews">
                <h1 className="sr__title">Отзывы</h1>
                <p className="sr__subtitle">
                    Прочитайте что говорят обо мне клиенты
                </p>

                <Slide
                    slidesToScroll={1}
                    slidesToShow={3}
                    indicators={false}
                >
                    {reviewImages.map((item, index) =>
                        <div className="each-slide-effect">
                            <img src={item} alt=""/>
                        </div>
                    )}
                </Slide>

            </section>

            <section className="section__contacts">
                <h1 className={"sc__title"}>Контакты</h1>

                <div className="sc__content">
                    <div className="sc__maps">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A46e7f4b564cbbebf08ebb19ab893144398b943a0a7349d11697c3d36b80dd260&amp;source=constructor"
                            width="500" height="400" frameBorder="0"></iframe>
                    </div>
                    <div className="sc__data">
                        <ul>
                            <li>
                                <a href="#">Контактный телефон:</a>
                            </li>
                            <li>
                                <a href="#">Контактный телефон:</a>
                            </li>
                            <li>
                                <a href="#">Контактный телефон:</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}