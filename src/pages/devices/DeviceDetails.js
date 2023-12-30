import {useParams} from "react-router-dom";
import "./devicesStyle.css";
import SectionDeviceDetails from "../sections/SectionDeviceDetails";
import SectionReviews from "../sections/SectionReviews";
import {SectionProblems} from "../sections/SectionProblems";
import SectionHelper from "../sections/SectionHelper";
import SectionPrinciples from "../sections/SectionPrinciples";
import SectionWarranty from "../sections/SectionWarranty";
import SectionAdvantages from "../sections/SectionAdvantages";
import SectionAbout from "../sections/SectionAbout";
import {Washing_problems} from "../../common/RepairProblems";

export default function DeviceDetail() {

    let {deviceName} = useParams();


    return (
        <>
            <div className="header__box"></div>

            <SectionDeviceDetails/>

            <SectionProblems
                problemsList={Washing_problems}
                title_gen={"Популярные поломки стиральных машин"}
            />

            <SectionHelper title={"Не нашли свою поломку?"}/>

            <SectionPrinciples/>

            <SectionWarranty/>

            <SectionAdvantages tag={"СТИРАЛКИ"}/>

            <SectionAbout imageUrl={`${process.env.PUBLIC_URL}/about/master_washing.jpg`}/>

            <SectionReviews
                imageList={[
                    `${process.env.PUBLIC_URL}/reviews/washing/1.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/2.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/3.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/4.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/5.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/6.jpg`,
                    `${process.env.PUBLIC_URL}/reviews/washing/7.jpg`
                ]
                }
            />

        </>
    )
}