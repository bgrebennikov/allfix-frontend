export default function SectionPrinciples() {
    return (
        <>
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
        </>
    )
}