import {useState} from "react";

export const ActionButtonState = {
    IDLE: 'idle',
    LOADING: 'loading'
}

const loadingAnim = () => {
    return (
        <div className={"actionButtonBody"}>
            <div className="actionButtonText">Подождите</div>
            <div className="loadingAnim"></div>
        </div>
    )
}

const renderSwitch = (state, text) => {

    switch (state) {
        case ActionButtonState.IDLE:
            return text
        case ActionButtonState.LOADING:
            return loadingAnim()
        default:
            return text
    }
}

export const ActionButton = ({text, state, onClick, className}) => {

    return (
        <button type="submit" className={`btn__big__yellow ${className}`}
                onClick={onClick}
                disabled={state === ActionButtonState.LOADING}
        >
            {renderSwitch(state, text)}
        </button>
    )

}