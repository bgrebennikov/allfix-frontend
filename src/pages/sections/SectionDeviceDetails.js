import {useContext, useEffect} from "react";
import {PageStateContext} from "../../common/PageStateContext";

export default function SectionDeviceDetails() {

    const {currentPage, setCurrentPage, openFeedbackModal} = useContext(PageStateContext);

    useEffect(() => {
        setCurrentPage("Конкретная модель")
        console.log(currentPage)
    });

    return (
        <>
            <section className="section__device__details">

                <div className="sdv__content">
                    <div className="sdv__body__wrapper">
                        <div className="sdv__body__row">
                            <div className="device__img__wrapper">
                                <img src="https://candy-one-remonts.ru/assets/img/stiralka/candy-cs34-1051-d12-07.jpg"
                                     alt=""/>
                            </div>
                            <div className="sdv__body">
                                <h1 className={"sdv__device__title"}>Ремонт стиральной машины
                                    Candy CS34 1051 D1/2-07</h1>

                                <ul className={"sdv__price__list"}>
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

                                <div className="sdv__description">
                                    Закажите Бесплатную консультацию мастера чтобы точнее определить стоимость ремонта
                                    стиральной машины.
                                    Вы можете <a href="#"
                                                 className={"sdv__description__link"}
                                                 onClick={openFeedbackModal}
                                >заказать звонок</a> через
                                    сайт, или позвонить сейчас.
                                </div>

                            </div>
                        </div>
                        <div className="sdv__body__row">
                            <div className="sdv__action__wrapper">
                                <div className="sdv__action__btns">
                                    <button
                                        className={"sdv__btn__yellow"}
                                        onClick={openFeedbackModal}
                                    >Вызвать мастера
                                    </button>
                                    <button
                                        className={"sdv__btn__blue"}
                                        onClick={openFeedbackModal}
                                    >Получить консультацию
                                    </button>
                                </div>
                                <div className="sdv__action__body">
                                    <h3>Частный мастер: Игорь лебедев</h3>
                                    <a href={"tel:+79934710049"}>+7 (993) 471-00-49</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="sdv__recommend">
                        <h1>Цена новой в магазине</h1>

                        <div className="sdv__rec__preview"></div>
                        <h3 className={"sdv__rec__cost"}>23 990 ₽</h3>
                        <p className={"sdv__rec__title"}>Стиральная машина Candy CS34 1051 D1/2-07</p>

                        <h3 style={{
                            color: 'red'
                        }}>Покупать новую не выгодно</h3>

                        <p className={"sdv__rec__compare__text"}>
                            Из-за санкций и роста курса доллара растут и цены на импортную технику.
                            <br/><br/>
                            Заказав ремонт вы экономите до 96% своих средств, а мастер выписывает вам гарантию до 3х лет
                            на работы, если Ваша техника сломается в течении этого времени - повторный ремонт бесплатно.
                        </p>

                    </div>


                </div>
            </section>
        </>
    )
}