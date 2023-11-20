import {sendFeedbackForm} from "../../api/FeedbackApi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {ActionButton, ActionButtonState} from "../components/ActionButton";
import {FormFeedbackWindow} from "../windows/FormFeedbackWindow";

export default function SectionAdvantages({tag}) {

    const navigate = useNavigate();

    const [phoneError, setPhoneError] = useState(false);

    const [priceBtnState, setPriceBtnState] = useState(ActionButtonState.IDLE);

    function onFormSubmit(e) {
        e.preventDefault();

        const formData = e.target.elements;
        setPriceBtnState(ActionButtonState.LOADING)

        sendFeedbackForm({
            from_landing: window.location.pathname,
            description: formData.repair_reason.value ?? null,
            phone: formData.client_phone.value,
            tag: tag ?? "РЕМОНТ БЫТОВОЙ ТЕХНИКИ"
        }).then(r => {
            if (r.status === 200) {
                if (r.data.ok === 1) {
                    navigate("/thanks")
                }
                if (r.data.hasOwnProperty('errors')) {
                    setPhoneError(r.data.errors.phone)
                }
            }
        })
            .finally(() => {
                setPriceBtnState(ActionButtonState.IDLE)
            })


    }

    return (
        <>
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
                        <form action="/" className="sa__form" onSubmit={onFormSubmit}>
                            <h1 className="sa__form__title text-blue">
                                Убедитесь<br/>в доступности моих цен!
                            </h1>

                            <div className="sa__form__inputs">
                                <input type="text" name="repair_reason" id="repair_reason"
                                       placeholder={"Опишите поломку"}
                                />

                                <p
                                    className="phone_error_label"
                                    style={{
                                        display: phoneError ? 'block' : 'none'
                                    }}
                                >
                                    {phoneError}
                                </p>

                                <input type="text" name="client_phone" id="client_phone"
                                       placeholder={"Укажите телефон"}
                                />
                            </div>

                            <ActionButton text={"Узнать цену"} state={priceBtnState}
                            />

                            <img className={"drill_image"} src={`${process.env.PUBLIC_URL}/advantages/drill.png`}
                                 alt=""/>

                        </form>
                    </div>
                </div>

            </section>


        </>
    )
}