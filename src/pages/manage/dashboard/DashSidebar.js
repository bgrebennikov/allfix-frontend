import {Link} from "react-router-dom";

export default function DashSidebar({user, onLogout}) {

    return (
        <div className="sidebar__wrapper">

            <div className="sidebar__title">
                Master CRM
            </div>
            <div className="divider"></div>

            <div className="user__info">
                <p>{user.first_name} {user.last_name}</p>
                <div className="user__actions">
                    <button className="logout__btn" onClick={onLogout}>Выйти</button>
                </div>
            </div>

            <ul className={"sidebar__categories"}>
                <li className={"sidebar__items"}>
                    <Link to="/blog">Блог</Link>
                </li>

                <li className={"sidebar__items"}>
                    <Link to="/smm">Smm</Link>
                </li>
            </ul>

        </div>
    )


}