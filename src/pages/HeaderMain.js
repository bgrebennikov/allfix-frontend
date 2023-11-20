import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function HeaderMain() {

    const [activeCategoryTitle, setActiveCategoryTitle] = useState("")
    const [activeSubCategoryTitle, setActiveSubCategoryTitle] = useState("")
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const categoriesList = [
        {
            title: "Ремонт компьютеров",
            path: "pc",
            subcategories: [
                {
                    title: "Ремонт системных блоков",
                    path: "/sys_block",
                },
                {
                    title: "Ремонт ноутбуков",
                    path: "/laptop",
                },
                {
                    title: "Ремонт нетбуков",
                    path: "/notebook",
                },
                {
                    title: "Ремонт моноблоков",
                    path: "/monoblock",
                }
            ]
        },
        // {
        //     title: "Ремонт телевизоров",
        //     path: "tv"
        // },
        // {
        //     title: "Ремонт холодильников",
        //     path: "coolers"
        // },

        {
            title: "Ремонт стиральных машин",
            path: "washing",
            subcategories: [
                {
                    title: "Bosch",
                    path: "/bosch"
                },
                {
                    title: "Samsung",
                    path: "/samsung"
                },
                {
                    title: "LG",
                    path: "/lg"
                },
                {
                    title: "Siemens",
                    path: "/siemens"
                },
                {
                    title: "Electrolux",
                    path: "/electrolux"
                },
                {
                    title: "Whirlpool",
                    path: "/whirlpool"
                }
            ]
        },
        // {
        //     title: "Ремонт посудомоек",
        //     path: "washing"
        // }

    ]

    const navigate = useNavigate()

    function onItemSelected(e, index, item) {
        setActiveCategoryTitle(item.title);

        if (isDropdownOpen && item.subcategories.length === 0) {
            setTimeout(() => {
                setDropdownOpen(false)
            }, 500)
        }

    }

    function onSubItemSelected(e, index, item) {
        setActiveSubCategoryTitle(item.title);

        if (isDropdownOpen && item.subcategories.length === 0) {
            setTimeout(() => {
                setDropdownOpen(false)
            }, 500)
        }

    }

    function handleDropdown(e) {
        e.preventDefault()
        setDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            <header className={"header__main"}>
                <a href={"/"} className="main__header__logo">
                    <img className={"header__logo__img"} src={`${process.env.PUBLIC_URL}/logo.svg`} alt=""/>
                    <div className="master__name">
                        <p className="master__firstname">Мастер Лебедев</p>
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
                        {/*<a href="#">Обо мне</a>*/}
                    </li>
                    <li>
                        <Link to={"/reviews"}>Отзывы</Link>
                    </li>
                    <li>
                        <Link to={"/contacts"}>Контакты</Link>
                    </li>
                    <li>
                        {/*<a href="#">Блог</a>*/}
                    </li>
                </ul>

                <div className="phone__item">
                    <p className="phone__number">+7 993-471-00-49</p>
                    <a href="tel:+79934710049" className="request_call_btn">Заказать звонок</a>
                </div>

                <div className="nav__toggle__menu__btn">
                    <a href="#" onClick={(e) => handleDropdown(e)}><img
                        className={"nav__toggle__menu_icon"}
                        src={`${process.env.PUBLIC_URL}/icons/menu.svg`}
                        alt=""/>
                    </a>
                </div>

            </header>

            <ul className={`nav__categories ${isDropdownOpen ? "mob__categories__visible" : ""}`}>
                {categoriesList.map((categoryItem, index) =>
                    <li className={"nav__categories_element"} key={index}>
                        <Link
                            className={` ${activeSubCategoryTitle === index && "text-blue"}`}
                            onClick={(e) => onItemSelected(e, index, categoryItem)}
                            to={`/${categoryItem.path}`}
                        >{categoryItem.title}
                        </Link>
                        <div
                            className={` ${categoryItem.title === activeCategoryTitle ? "underline__active" : "underline__effect"}`}></div>

                        <ul className="nav__dropdown">
                            {categoryItem.subcategories?.map((subItem, index) =>

                                <li key={index}>
                                    <Link to={categoryItem.path+subItem.path} onClick={(e) => onSubItemSelected(e, index, subItem)}>{subItem.title}</Link>
                                    <div
                                        className={` ${categoryItem.title === activeSubCategoryTitle ? "underline__active" : "underline__effect"}`}></div>
                                </li>
                            )}
                        </ul>

                    </li>
                )}
            </ul>
        </>
    )
}