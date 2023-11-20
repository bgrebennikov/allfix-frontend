export default function SectionAbout({imageUrl}) {

    const defaultImageUrl = `${process.env.PUBLIC_URL}/about/master_photo.jpg`

    return (
        <>
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
                        <img className={"sab__master__photo__image"} src={imageUrl ?? defaultImageUrl} alt=""/>
                    </div>
                    <div className="sab__master__content">
                        <div className="sab__content__body">
                            <p>Я - Самозанятый. Частный мастер</p>
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
                            <span className={"sign__name text-blue"}>Игорь Лебедев</span>
                            <span>Опыт работы - 12 лет</span>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}