import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function HeaderMain() {

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1)
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const categoriesList = [
        {
            title: "Ремонт компьютеров",
            path: "pc",
            subcategories: [
                {
                    title: "Ремонт системных блоков",
                    path: "pc",
                },
                {
                    title: "Ремонт ноутбуков",
                    path: "pc",
                },
                {
                    title: "Ремонт нетбуков",
                    path: "pc",
                },
                {
                    title: "Ремонт моноблоков",
                    path: "pc",
                }
            ]
        },
        {
            title: "Ремонт телевизоров",
            path: "tv"
        },
        {
            title: "Ремонт холодильников",
            path: "pc"
        },
        {
            title: "Ремонт стиральных машин",
            path: "pc"
        },
        {
            title: "Ремонт посудомоек",
            path: "washing"
        },
        {
            title: "Ремонт сантехники",
            path: "pc"
        }

    ]

    const navigate = useNavigate()

    function onItemSelected(e, index) {
        setActiveCategoryIndex(index);
    }

    function handleDropdown(e) {
        e.preventDefault()
        setDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            <header>
                <a href={"/"} className="header__logo">
                    <img className={"header__logo__img"} src={`${process.env.PUBLIC_URL}/logo.svg`} alt=""/>
                    <div className="master__name">
                        <p className="master__firstname">Мастер Крылов</p>
                        <p className="master__slogan">ремонт бытовой техники</p>
                    </div>
                </a>

                <a href="#" className="place__dropdown">
                    <div className="place_selector">
                        Самара
                    </div>
                </a>

                <ul className="nav__items">
                    <li>
                        <a href="#">Обо мне</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <a href="#">Блог</a>
                    </li>
                </ul>

                <div className="phone__item">
                    <p className="phone__number">+7 999-171-00-49</p>
                    <a href="#" className="request_call_btn">Заказать звонок</a>
                </div>

                <div className="nav__toggle__menu__btn">
                    <a href="#" onClick={(e) => handleDropdown(e)}>=</a>
                </div>

            </header>

            <ul className={`nav__categories ${isDropdownOpen ? "display-block" : ""}`}>
                {categoriesList.map((categoryItem, index) =>
                    <li className={"nav__categories_element"}>
                        <Link
                            className={` ${activeCategoryIndex === index && "text-blue"}`}
                            onClick={(e) => onItemSelected(e, index)}
                            to={`/${categoryItem.path}`}>{categoryItem.title}</Link>
                        <div
                            className={` ${activeCategoryIndex === index ? "underline__active" : "underline__effect"}`}></div>

                        <ul className="nav__dropdown">
                            {categoryItem.subcategories?.map((subItem, index) =>

                                <li>
                                    <a href={subItem.path} onClick={(e) => e.preventDefault()}>{subItem.title}</a>
                                    <div className="underline__effect"></div>
                                </li>
                            )}
                        </ul>

                    </li>
                )}
            </ul>

        </>
    )
}