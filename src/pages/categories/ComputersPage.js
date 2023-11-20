import SectionHelper from "../sections/SectionHelper";
import SectionPrinciples from "../sections/SectionPrinciples";
import SectionWarranty from "../sections/SectionWarranty";
import SectionAdvantages from "../sections/SectionAdvantages";
import SectionAbout from "../sections/SectionAbout";
import SectionReviews from "../sections/SectionReviews";
import SectionContacts from "../sections/SectionContacts";
import SectionCatMain from "../components/SectionCatMain";
import {SectionProblems} from "../sections/SectionProblems";
import {useParams} from "react-router-dom";

export default function ComputersPage(params) {

    const problems = [
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-1.png`,
            title: "Не включается",
            price: 750
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-2.png`,
            title: "Произвольно перезагружается",
            price: 600
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-3.png`,
            title: "Синий экран",
            price: 600
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-4.png`,
            title: "Залит жидкостью",
            price: 1690
        },

        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-5.png`,
            title: "Долго грузится / Тормозит",
            price: 650
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-6.png`,
            title: "Сильно шумит",
            price: 700
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-7.png`,
            title: "Перегрев",
            price: 1200
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-8.png`,
            title: "Разбита матрица / экран",
            price: 2100
        },

        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-9.png`,
            title: "Не загружается (Черный экран)",
            price: 900
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-10.png`,
            title: "Не выключается",
            price: 600
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-11.png`,
            title: "Выключается сам по себе",
            price: 700
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/pc/comp-12.png`,
            title: "Не работает интернет",
            price: 500
        },
    ]
    const routeParams = useParams();
    const brand = routeParams["brand"]


    return (
        <>

            <SectionCatMain
                title_gen={params.title ?? "компьютеров"}
                brand={brand}
                image={`${process.env.PUBLIC_URL}/sections/pc/master_home.jpg`}
                image_sm={`${process.env.PUBLIC_URL}/sections/pc/pc_cat_main_sm.png`}

            />

            <SectionProblems
                title_gen={"Популярные поломки компьютеров"}
                problemsList={problems}
                showPrices={true}
            />

            <SectionHelper title={"Не знайте или не нашли свою поломку?"}
                           modal_title={"Бесплатная диагностика"}
            />

            <SectionPrinciples/>

            <SectionWarranty/>

            <SectionAdvantages tag={"КОМПЬЮТЕРЫ"}/>

            <SectionAbout/>

            <SectionReviews/>

            <SectionContacts/>


        </>
    )
}