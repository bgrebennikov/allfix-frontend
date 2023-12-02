import "react-slideshow-image/dist/styles.css";
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import SectionHelper from "../sections/SectionHelper";
import SectionPrinciples from "../sections/SectionPrinciples";
import SectionWarranty from "../sections/SectionWarranty";
import SectionAdvantages from "../sections/SectionAdvantages";
import SectionAbout from "../sections/SectionAbout";
import SectionReviews from "../sections/SectionReviews";
import SectionContacts from "../sections/SectionContacts";
import SectionMainHome from "../sections/SectionMainHome";


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
            discount: 20,
            path:'/pc'
        },
        {
            image: `${process.env.PUBLIC_URL}/repair_items/washing.png`,
            title: "РЕМОНТ СТИРАЛЬНЫХ МАШИН",
            description: "Ремонт стиральных машин\n" +
                "Автомат\n" +
                "Полуавтомат\n" +
                "С вертикальной загрузкой\n" +
                "Ремонт плат\n" +
                "Ремонт подшипника\n" +
                "Ремонт барабана\n" +
                "Ремонт любой сложности",
            discount: 20,
            path: 'washing'
        },
    ])

    return (
        <>

            <SectionMainHome
                brand={brand}
            />

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
                                    <Link to={item.path} target={"_blank"} className="rc__call__master__link">
                                        <div className="rc__call__master__btn">
                                            Узнать цену
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        )
                    })}
                </div>

            </section>

            <SectionHelper/>

            <SectionPrinciples/>

            <SectionWarranty/>

            <SectionAdvantages/>

            <SectionAbout/>

            <SectionReviews/>

            <SectionContacts/>

        </>
    )
}