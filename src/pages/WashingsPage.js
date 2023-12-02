import SectionHelper from "./sections/SectionHelper";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import SectionPrinciples from "./sections/SectionPrinciples";
import SectionWarranty from "./sections/SectionWarranty";
import SectionAdvantages from "./sections/SectionAdvantages";
import SectionAbout from "./sections/SectionAbout";
import SectionReviews from "./sections/SectionReviews";
import SectionContacts from "./sections/SectionContacts";
import {SectionProblems} from "./sections/SectionProblems";
import {FormFeedbackWindow} from "./windows/FormFeedbackWindow";
import {useState} from "react";
import {sendFeedbackForm} from "../api/FeedbackApi";
import styled from "styled-components";
import {color} from "framer-motion";
import {ActionButton, ActionButtonState} from "./components/ActionButton";
import SectionCatMain from "./components/SectionCatMain";

const PhoneErrorLabel = styled.label`
  display: block;
  margin: 6px 0;
  font-size: 11pt;
  font-weight: 500;
`

export default function WashingsPage() {

    const routeParams = useParams()

    const [searchParams] = useSearchParams()
    const showPrices = Boolean(searchParams.get("p")) === false;

    const brand = routeParams["brand"]

    const problems = [
        {
            image: `${process.env.PUBLIC_URL}/problems/washer1.png`,
            title: "В машинку попал посторонний предмет",
            price: 500
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer2.png`,
            title: "Протекает",
            price: 390
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer3.png`,
            title: "Не открывается люк",
            price: 450
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer4.png`,
            title: "Не сливает воду",
            price: 600
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer5.png`,
            title: "Не заливает воду",
            price: 750
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer6.png`,
            title: "Не греет воду",
            price: 450
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer8.png`,
            title: "Не вращается барабан",
            price: 690
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer9.png`,
            title: "Не отжимает",
            price: 550
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer10.png`,
            title: "Не включается",
            price: 590
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer11.png`,
            title: "Прыгает и стучит",
            price: 490
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer12.png`,
            title: "Неприятный запах",
            price: 600
        },
        {
            image: `${process.env.PUBLIC_URL}/problems/washer13.png`,
            title: "Зависают программы",
            price: 490
        }
    ]

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState();

    const navigate = useNavigate();


    function onModalOpen(e) {
        e.preventDefault();
        setModalIsOpen(true)
    }

    const [phoneError, setPhoneError] = useState(false);

    const [mainFormBtnState, setMainFormBtnState] = useState(ActionButtonState.IDLE);

    function handleFormSubmit(e) {
        e.preventDefault()
        setMainFormBtnState(ActionButtonState.LOADING)

        const formElements = e.target.elements;

        console.log(formElements)

        sendFeedbackForm(
            {
                phone: formElements.customer_phone.value,
                client_name: formElements.customer_name.value,
                from_landing: window.location.pathname,
            }
        ).then(r => {
            if (r.status === 200) {
                if (r.data.ok === 1) {
                    navigate("/thanks")
                }
                if (r.data.errors) {
                    setPhoneError(r.data.errors.phone)
                }
            }
        }).finally(() => {
            setMainFormBtnState(ActionButtonState.IDLE)
        })

        setModalIsOpen(false)
    }

    return (
        <>

            <SectionCatMain
                title_gen={"Стиральных машин"}
                brand={brand}
                image={`${process.env.PUBLIC_URL}/sections/washing/washing_master.png`}
                image_sm={`${process.env.PUBLIC_URL}/sections/washing/washing_master_sm.png`}
            />

            <SectionProblems
                title_gen={"Популярные поломки стиральных машин"}
                showPrices={showPrices}
                problemsList={problems}
                OnItemClick={onModalOpen}
            />

            <SectionHelper title={"Не нашли свою поломку?"} onClick={(e) => {
                setModalTitle("Бесплатная диагностика")
                onModalOpen(e)
            }}/>

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

            <SectionContacts/>

            <FormFeedbackWindow isVisible={modalIsOpen}
                                onClose={() => {
                                    setModalIsOpen(false)
                                    setModalTitle(null);
                                }}
                                title={modalTitle}
                                onAppend={handleFormSubmit}
            />

        </>
    )
}