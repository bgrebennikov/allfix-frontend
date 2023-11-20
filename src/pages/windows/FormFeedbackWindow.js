import styled, {keyframes, css} from "styled-components";
import {useState} from "react";
import {sendFeedbackForm} from "../../api/FeedbackApi";
import {useLocation, useNavigate} from "react-router-dom";
import {device} from "../../mediacss/Responsive";

const activeAnim = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const closeAnim = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
`;

const activeOverlayAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const activeAnimRule = css`
  ${activeAnim} .3s linear;
`

const closeAnimRule = css`
  ${closeAnim} .3s linear forwards;
`

const activeOverlayAnimRule = css`
  ${activeOverlayAnim} .3s ease;
`


const WindowContainer = styled.div`



  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  color: #000000;
  max-width: 320px;
  transform: translate(-50%, -50%);
  opacity: 1;
  border-radius: 12px;
  padding: 2em;
  z-index: 1;

  visibility: ${({active}) => (active ? 'visible' : 'hidden')};
  animation: ${({active}) => (active ? activeAnimRule : closeAnimRule)};
  text-align: center;

  @media ${device.mobileL} {
    width: 75vw;
  }

  & p {
    font-weight: 600;
  }
`

const WindowOverlay = styled.div`
  background-color: rgba(0, 0, 0, .25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  display: ${({active}) => (active ? 'block' : 'none')};
  animation: ${({active}) => (active ? activeOverlayAnimRule : 'none')};
`

const FeedbackForm = styled.form`
  margin: 1em 0;

  & input {
    padding: 1.2em;
    border: none;
    outline: none;
    background-color: #f1f1f1;
    border-radius: 12px;
    width: calc(100% - 2.4em);
    text-align: center;
  }

`

const PhoneFormLabel = styled.label`
  display: block;
  margin: 6px 0;
  font-size: 11pt;
  font-weight: 500;

  color: ${({isError}) => (isError ? '#ff003b' : '#000000')};
`

const RequestButton = styled.button`
  margin-top: 1em;
  padding: 1.2em;
  border-radius: 12px;
  border: none;
  width: 100%;
  background-color: ${({isLoading}) => (!isLoading ? "#00EF99" : "#cccccc")};
  font-weight: 500;
  font-size: 11pt;
`

const FormSubtitle = styled.p`
  font-weight: 400;
  font-size: 11pt;
  line-height: 1.5em;
  margin: 2em 0;
`

const CloseBtn = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: .5em;
  margin: .5em;

  & img {
    max-height: 24px;
  }
`


export const FormFeedbackWindow = ({isVisible, onClose, onAppend, title}) => {

    const [phoneError, setPhoneError] = useState(false)

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true)
        setPhoneError(false)

        const formElements = e.target.elements;
        const phone = formElements.phone.value;

        sendFeedbackForm(
            {
                phone: phone,
                from_landing: window.location.pathname
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

    }

    return (
        <>
            <WindowContainer active={isVisible} closed={!isVisible}>

                <CloseBtn onClick={onClose}>
                    <img src={`${process.env.PUBLIC_URL}/icons/ic_close.svg`} alt="Закрыть окно"/>
                </CloseBtn>

                <div className="mw__content__left">
                    <h1>
                        {title ?? "Вызов мастера"}
                    </h1>
                    <FormSubtitle>Укажите свой телефон, я перезвоню и отвечу на ваши вопросы а так же проконсультирую по
                        стоимости ремонта</FormSubtitle>

                    <FeedbackForm action="#" onSubmit={handleFormSubmit}>
                        <PhoneFormLabel isError={phoneError} htmlFor="phone">{phoneError ? phoneError : "Ваш номер телефона"}</PhoneFormLabel>
                        <input type="text" name="phone" id="phone" placeholder={"+7 (927) 000-00-00"} onChange={() => {setPhoneError(false)}}/>

                        <RequestButton
                            disabled={loading}
                            isLoading={loading}>{!loading ? "Вызвать мастера" : "Подождите..."}</RequestButton>

                    </FeedbackForm>

                </div>
            </WindowContainer>
            <WindowOverlay active={isVisible} onClick={onClose}/>
        </>
    )
}