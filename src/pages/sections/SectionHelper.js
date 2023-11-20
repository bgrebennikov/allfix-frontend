import {Link} from "react-router-dom";
import {FormFeedbackWindow} from "../windows/FormFeedbackWindow";
import {useState} from "react";

export default function SectionHelper(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <section className="section__helper">
                <h1 className="text-blue">{props.title ? props.title : "Не нашли свой вид техники?"}</h1>
                <p>Тогда, звоните или оставляйте заявку
                    я проконсультирую Вас по всем услугам</p>

                <Link to={null} href="#" type="submit"
                      onClick={() => setModalIsOpen(true)}
                      className="btn__big__yellow sh__ask__btn">
                    Задать вопрос
                </Link>

            </section>

            <FormFeedbackWindow
                isVisible={modalIsOpen}
                onClose={() => {
                    setModalIsOpen(false)
                }}
                title={
                    props.modal_title
                }
            />
            
        </>
    )
}