import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {ActionButton, ActionButtonState} from "../components/ActionButton";
import {sendFeedbackForm} from "../../api/FeedbackApi";


export default function SectionMainHome(params) {
    const brand = params.brand


    const navigate = useNavigate();

    const [loadingState, setLoadingState] = useState(ActionButtonState.IDLE);

    function onFormSubmit(e) {
        e.preventDefault();

        setLoadingState(ActionButtonState.LOADING)

        const formData = e.target.elements;

        const name = formData.customer_name.value;
        const phone = formData.customer_phone.value;

        sendFeedbackForm(
            {
                phone: phone,
                client_name: name,
                from_landing: window.location.pathname
            }
        ).then(response => {
            if (response.status === 200) {
                if (response.data.ok === 1) {
                    navigate("/thanks")
                }
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.errors.phone)
                }
            }
        })
            .finally(() => {
                setLoadingState(ActionButtonState.IDLE)
            })

    }


    return (
        <section className="section__home">
            <div className="phone__number__sm">
                <a href="tel:+79934710049">+7 993-471-00-49</a>
                <p>
                    Бесплатная консультация
                </p>
            </div>
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

                <form action="/" onSubmit={onFormSubmit} className="section__home__form">
                    <div className="home__form__title">
                        Бесплатно выясню причину поломки и озвучу стоимость работ
                    </div>

                    <input type="text" name="customer_name" id="customer_name_field"
                           placeholder="Ваше имя"
                    />

                    <input type="text" name="customer_phone" id="customer_phone"
                           placeholder="Номер телефона"
                    />

                    {/*<input type="submit" className="btn__big__yellow"*/}
                    {/*       value={"Получить консультацию"}/>*/}

                    <ActionButton className={"btn__full__width"} text={"Узнать стоимость работ"} state={loadingState} />

                </form>
            </div>
            <div className="section__image">
                <img src={`${process.env.PUBLIC_URL}/master_main.png`} alt=""/>
            </div>
            <div className="section__divider">

            </div>
        </section>
    )
}