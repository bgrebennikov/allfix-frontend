import {ActionButton, ActionButtonState} from "./ActionButton";
import {sendFeedbackForm} from "../../api/FeedbackApi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SectionCatMain({
                                           brand, title_gen, city_prep,
                                           image,
                                           image_sm
                                       }) {

    const [phoneError, setPhoneError] = useState(false)
    const [loading, setLoading] = useState(ActionButtonState.IDLE);
    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(ActionButtonState.LOADING)
        setPhoneError(false)

        const formElements = e.target.elements;
        const phone = formElements.customer_phone.value;
        const client_name = formElements.customer_name_field.value;

        sendFeedbackForm(
            {
                phone: phone,
                from_landing: window.location.pathname,
                client_name: client_name
            }
        ).then(response => {
            if (response.status === 200) {
                setLoading(false)
                if (response.data.ok === 1) {
                    navigate("/thanks")
                }
                if (response.data.hasOwnProperty('errors')) {
                    setPhoneError(response.data.errors.phone)
                }
            }
        })
            .finally(() => setLoading(ActionButtonState.IDLE))

    }

    return (
        <>
            <section className="section__cat__main" style={{
                backgroundImage: `url("${image_sm}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }>

                <div className="phone__number__sm">
                    <a href="tel:+79934710049">+7 993-471-00-49</a>
                    <p>
                        Бесплатная консультация
                    </p>
                </div>

                <div className="scat__content">

                    <div className="scat__content__left">

                        <h1 className="scat__title">
                            Ремонт {title_gen ?? "бытовой техники"} {brand ? brand.charAt(0).toUpperCase() + brand.slice(1, brand.length) : ""} в {city_prep ?? "Самаре"}
                            <span className={"text-yellow"}><br/>от 500 Рублей</span>
                        </h1>

                        <form action="#" onSubmit={handleFormSubmit} className="scat__home__form">
                            <div className="scat__form__title">
                                Бесплатно выясню причину поломки и озвучу стоимость работ
                            </div>

                            <input type="text" name="customer_name" id="customer_name_field"
                                   placeholder="Ваше имя"
                            />

                            <p
                                className="phone_error_label"
                                style={{
                                    display: phoneError ? 'block' : 'none'
                                }}
                            >
                                {phoneError}
                            </p>
                            <input type="number" name="customer_phone" id="customer_phone"
                                   placeholder="Номер телефона"
                            />

                            <ActionButton text={"Получить консультацию"} state={loading}/>

                        </form>

                    </div>
                    <div className="scat__content__right">
                        <img src={image} alt=""/>
                    </div>
                </div>

            </section>
        </>
    )
}