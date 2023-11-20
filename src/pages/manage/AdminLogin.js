import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import {useAuth} from "../../api/auth/AuthContext";
import {useNavigate} from "react-router-dom";

export default function AdminLogin() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {login, currentUser} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {

        return () => {
            if (currentUser) navigate("/")
        }

    }, [currentUser, navigate])

    function handleLoginClick(e) {
        e.preventDefault()
        login(username, password)
    }

    return (
        <section className={"login__section"}>
            <div className="login__content">
                <div className="login__form__wrapper">
                    <form action="" className="login__form">
                        <div className="login__form__head">
                            <h1 className={"login__form__title"}>Авторизация</h1>
                            <p>Панель управления сайтом, и база клиентов</p>
                        </div>

                        <div className="login__form__inputs">
                            <input type="text"
                                   onChange={ (e) => setUsername(e.target.value)}
                                   name="email" id="login_email" placeholder={"Email"}/>
                            <input type="password"
                                   onChange={ (e) => setPassword(e.target.value)}
                                   name="password" id="login_password" placeholder={"Пароль"}/>
                        </div>

                        <div className="login__form__btns">
                            <button onClick={(e) => handleLoginClick(e)}>Войти</button>
                            <button>Восстановить пароль</button>
                        </div>

                    </form>
                </div>
                <div className="qr__auth">
                    <div className="qr__code">
                        <QRCode
                            size={256}
                            bgColor={"#f2f2f2"}
                            fgColor={"#007dff"}
                            style={{height: "auto", maxWidth: "100%", width: "100%"}}
                            value={"test"}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <h3>QR Авторизация</h3>
                    <p>
                        Отсканируюте код в приложении MasterCRM для авторизации без ввода пароля
                    </p>
                </div>
            </div>
        </section>
    )
}