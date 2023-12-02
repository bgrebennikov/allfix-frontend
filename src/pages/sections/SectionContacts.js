import {Map, Placemark, YMaps, ZoomControl} from '@pbe/react-yandex-maps';


export default function SectionContacts() {
    return (
        <>
            <section className="section__contacts">
                <h1 className={"sc__title"}>Контакты</h1>

                <div className="sc__content">
                    <div className="sc__maps">
                        <YMaps>
                            <Map
                                width={"100%"}
                                height={600}
                                defaultState={
                                {
                                    center: [53.22193214318735, 50.27036922588289],
                                    zoom: 14.5,
                                    behaviors: ["disable('scrollZoom')"]
                                }}>
                                <Placemark geometry={[53.22193214318735, 50.27036922588289]} />
                                <ZoomControl options={{ float: "right" }} />
                            </Map>
                        </YMaps>
                    </div>
                    <div className="sc__contacts_list">

                        <div className="sc__list__item">
                            <img src={`${process.env.PUBLIC_URL}/icons/icon_phone.svg`} alt=""
                                 className="sc__item__icon"/>
                            <div className="sc__item__content">
                                <div className="sc__item__title">
                                    Контактный телефон
                                </div>
                                <div className="sc__item__body">
                                    <a href="tel:+7 (993)-471-00-49">+7 (993)-471-00-49</a>
                                </div>
                            </div>
                        </div>

                        <div className="sc__list__item">
                            <img src={`${process.env.PUBLIC_URL}/icons/icon_mail.svg`} alt=""
                                 className="sc__item__icon"/>
                            <div className="sc__item__content">
                                <div className="sc__item__title">
                                    Email
                                </div>
                                <div className="sc__item__body">
                                    masterlebedev.igor@yandex.ru
                                </div>
                            </div>
                        </div>

                        <div className="sc__list__item">
                            <img src={`${process.env.PUBLIC_URL}/icons/icon_place.svg`} alt=""
                                 className="sc__item__icon"/>
                            <div className="sc__item__content">
                                <div className="sc__item__title">
                                    Адрес
                                </div>
                                <div className="sc__item__body">
                                    Г. Самара, улица юбилейная, 15а
                                </div>
                            </div>
                        </div>

                        <div className="sc__list__item">
                            <img src={`${process.env.PUBLIC_URL}/icons/icon_clock.svg`} alt=""
                                 className="sc__item__icon"/>
                            <div className="sc__item__content">
                                <div className="sc__item__title">
                                    Время работы
                                </div>
                                <div className="sc__item__body">
                                    Круглосуточно, без перерывов и выходных
                                </div>

                                <br/>
                                <p
                                    style={{
                                        fontSize: "11pt"
                                    }}
                                >Самозанятый: Игорь Лебедев, ИНН: 636600279657</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}