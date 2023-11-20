import {FormFeedbackWindow} from "../windows/FormFeedbackWindow";
import {useState} from "react";

export const SectionProblems = (
    {title_gen, showPrices, problemsList, modal_title}
) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedItemTitle, setSelectedItemTitle] = useState();

    return (
        <>
            <section className="section__problems">
                <h1>{title_gen}</h1>

                <div className="sc__problems__list">
                    {problemsList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="scp__list__item" onClick={() => {
                                    setSelectedItemTitle(item.title)
                                    setModalIsOpen(true)
                                }}>
                                    <img src={item.image} alt={item.title}/>
                                    <p>
                                        {item.title}
                                    </p>

                                    {(() => {
                                        if (item.price !== null && showPrices) {
                                            return (
                                                <>
                                                    <div className="scp__item__price">
                                                        <p>От<br/>{item.price}₽</p>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })()}

                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>

            <FormFeedbackWindow
                isVisible={modalIsOpen}
                onClose={() => {
                    setModalIsOpen(false)
                }}
                title={
                    modal_title ?? selectedItemTitle ?? "Вызвать мастера"
                }
            />
        </>
    )
}