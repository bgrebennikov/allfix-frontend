import {createContext, useState} from "react";
import {FormFeedbackWindow} from "../pages/windows/FormFeedbackWindow";


export const PageStateContext = createContext(null);

export function PageStateProvider({children}) {

    const [currentPage, setCurrentPage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openFeedbackModal = (e) => {
        e.preventDefault();
        setModalIsOpen(true)
    }

    const values = {
        currentPage,
        setCurrentPage,
        openFeedbackModal
    }

    return (
        <PageStateContext.Provider value={values}>
            {children}
            <FormFeedbackWindow isVisible={modalIsOpen} onClose={
                () => setModalIsOpen(false)
            }/>
        </PageStateContext.Provider>
    )

}