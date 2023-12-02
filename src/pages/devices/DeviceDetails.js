import {useParams} from "react-router-dom";
import "./devicesStyle.css";

export default function DeviceDetail() {

    let {deviceName} = useParams();


    return (
        <>
            <section className="section__device__details">
                <div className="sdv__content">
                    <div className="device__img__wrapper">
                        <img src="https://candy-one-remonts.ru/assets/img/stiralka/candy-cs34-1051-d12-07.jpg" alt=""/>
                    </div>
                    <div className="sdv__body">
                        <h1 className={"sdv__device__title"}>Ремонт стиральной машины
                            Candy CS34 1051 D1/2-07</h1>

                        <ul className={"sdv__price__list"}>
                            <li className={"sdv__price__item"}>
                                <div className="sdv__price__item__icon">
                                    <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                                </div>
                                <div className="sdv__price__item__body">
                                    <h4>Малый ремонт</h4>
                                    <p>От 500 Рублей</p>
                                </div>
                            </li>

                            <li className={"sdv__price__item"}>
                                <div className="sdv__price__item__icon">
                                    <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                                </div>
                                <div className="sdv__price__item__body">
                                    <h4>Ремонт средней сложности</h4>
                                    <p>От 1 500 Рублей</p>
                                </div>
                            </li>

                            <li className={"sdv__price__item"}>
                                <div className="sdv__price__item__icon">
                                    <img src={`${process.env.PUBLIC_URL}/icons/rem_easy.png`} alt=""/>
                                </div>
                                <div className="sdv__price__item__body">
                                    <h4>Сложный ремонт</h4>
                                    <p>От 3 000 Рублей</p>
                                </div>
                            </li>
                        </ul>

                        <div className="sdv__description">
                            Закажите Бесплатную консультацию мастера чтобы точнее определить стоимость ремонта стиральной машины.
                            Вы можете <a href="#" className={"sdv__description__link"}>заказать звонок</a> через сайт, или позвонить сейчас.
                        </div>

                    </div>
                    <div className="sdv__recommend">
                        <h1>Цена новой в магазине</h1>
                        <p className="sdv__recommend__body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores eligendi illum pariatur sed, velit vero. A ad cumque ducimus earum est eum facere fugiat, in itaque laudantium maiores modi officia quae quo ratione sequi sit. Aperiam asperiores assumenda corporis culpa deserunt doloribus dolorum earum eius eos error et fuga illum in ipsa iure labore laudantium, maxime mollitia nisi, quaerat quis quo quos saepe similique sit soluta temporibus ullam vel voluptatibus voluptatum. Aperiam facilis ipsum iusto nemo nesciunt perspiciatis quod sed ut veritatis? Error, esse eveniet iusto maiores, necessitatibus optio quas quod reprehenderit saepe similique sunt tempore temporibus veniam? Consequuntur doloribus enim incidunt, similique suscipit voluptatibus? Ad corporis dignissimos, ducimus, fugiat iusto libero modi omnis porro quisquam soluta vero voluptas! Assumenda autem deserunt ex facilis hic ipsa iusto laboriosam, nobis sed voluptatibus! Accusamus autem beatae, earum incidunt natus nihil quidem sint voluptatem voluptates! Accusamus consequuntur dignissimos exercitationem laborum numquam provident quam qui. Aliquid architecto at corporis cumque deleniti dignissimos dolorem, doloremque est eveniet, excepturi fuga in ipsum laborum molestiae necessitatibus odio, officia porro quod soluta velit? Accusantium commodi consectetur consequatur cupiditate debitis ducimus eius, ex explicabo fuga illum iste itaque laborum magnam magni mollitia nisi nulla porro praesentium quam, quas quidem quos saepe sapiente sed, similique tenetur veniam? Assumenda cupiditate debitis, distinctio eaque excepturi facilis natus nobis numquam optio perferendis quod sequi soluta. Commodi corporis deserunt dolor dolores, eos esse fuga iure iusto libero minus quas, quibusdam, recusandae repellat. Eos ex fuga, impedit neque quis quos sint! Ad commodi consectetur debitis deleniti dolor et eveniet exercitationem expedita facilis fuga harum laboriosam laborum libero, magnam molestias omnis perferendis porro reprehenderit repudiandae, sapiente suscipit vel vero! Accusamus ad alias aliquid delectus distinctio error esse expedita harum incidunt ipsum maiores maxime mollitia numquam perspiciatis porro possimus, quod sequi ullam velit voluptates. Aliquid debitis deserunt harum molestias quidem quisquam, recusandae repudiandae saepe, tenetur, ullam voluptas voluptatem. Animi nostrum provident tenetur? Deleniti est minima minus nam non pariatur velit. A alias, aliquid aperiam aut blanditiis cupiditate delectus dicta dolor doloremque dolores doloribus fuga impedit in ipsam neque non obcaecati qui ratione rem vero. Et hic libero perferendis tempora. Accusantium ad amet animi aperiam cupiditate delectus, eaque fugiat ipsa iusto libero molestiae mollitia officia optio quasi quis recusandae tenetur vero voluptas. A adipisci alias autem cupiditate ducimus fuga incidunt ipsa, iste nam numquam pariatur praesentium quae quo recusandae repellat tempore ut? A accusamus accusantium ad asperiores commodi corporis cumque deserunt dicta dolores ea excepturi exercitationem explicabo facere illo in ipsa ipsam iure laborum minus modi natus nihil nostrum perferendis praesentium quia quod recusandae repudiandae sint unde vel, vero vitae voluptatem voluptatum? Adipisci alias aperiam asperiores assumenda at dignissimos ducimus ea eius eos et ex fugiat maiores nemo nisi placeat quae quasi quibusdam quod recusandae sapiente sed sint temporibus unde veniam, voluptatem voluptates, voluptatibus. Alias atque cumque dignissimos dolorem doloremque, doloribus ducimus eaque enim eum fuga impedit incidunt iste laboriosam magnam maxime nisi nostrum omnis porro quibusdam, quo ratione rem sunt tempora unde ut? Dicta distinctio, excepturi natus non quae repudiandae vitae? Delectus laudantium quod rerum. Accusamus accusantium ad animi aspernatur deleniti dolore eius error, est exercitationem illum ipsam labore magnam natus nulla obcaecati quae quasi quisquam quod quos ratione rem repellat reprehenderit rerum sed tenetur totam vel. Atque consectetur dolore harum impedit iste, laudantium minus nulla omnis quae quidem soluta voluptatibus. At cumque enim ipsa, nesciunt non odit voluptatum. Cupiditate maiores modi provident quia quisquam. Aliquid aut autem beatae commodi distinctio dolor dolore doloribus eligendi exercitationem expedita, inventore itaque laborum maiores natus necessitatibus nemo nostrum omnis perspiciatis quae saepe sed soluta tempora ullam vel veniam! Accusantium architecto assumenda debitis dolorum, error explicabo iste laborum magni minima minus numquam optio perspiciatis quaerat quisquam, reiciendis rem repellendus reprehenderit voluptates. Animi assumenda, commodi consequuntur dicta, doloribus hic molestiae molestias numquam, pariatur quaerat qui voluptatum. Amet earum error, modi non praesentium ut voluptatibus. Ad amet corporis dignissimos dolor, dolorum est et fugit laudantium, neque nesciunt optio pariatur praesentium quis rem rerum similique sit temporibus veritatis! A consequatur dolorum expedita illo incidunt. Debitis doloribus itaque perferendis quis repellat ut voluptas voluptate. Ab debitis eligendi eveniet explicabo. Aliquam assumenda atque labore, odit sed sequi temporibus unde. Cumque itaque iure nesciunt omnis quasi?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}