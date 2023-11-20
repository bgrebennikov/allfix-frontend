
export default function ReviewsPage() {

    const defaultReviewImages = [
        `${process.env.PUBLIC_URL}/reviews/washing/1.jpg`,
        `${process.env.PUBLIC_URL}/reviews/washing/2.jpg`,
        `${process.env.PUBLIC_URL}/reviews/washing/3.jpg`,
        `${process.env.PUBLIC_URL}/reviews/washing/4.jpg`,
        `${process.env.PUBLIC_URL}/reviews/washing/5.jpg`,
        `${process.env.PUBLIC_URL}/reviews/washing/6.jpg`,

        `${process.env.PUBLIC_URL}/reviews/review1.jpg`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review3.png`,
        `${process.env.PUBLIC_URL}/reviews/review4.png`,
        `${process.env.PUBLIC_URL}/reviews/review5.png`,
        `${process.env.PUBLIC_URL}/reviews/review6.png`
    ];

    return (
        <section className={"reviews__content"}>
            <h1>Отзывы о моих работах</h1>
            <p>Все отзывы собраны из открытых источников</p>

            <ul className={"reviews__list"}>
                {defaultReviewImages.map((item, index) => {
                    return(
                        <li key={index}>
                            <img src={item} alt=""/>
                        </li>
                    )
                })}
            </ul>

        </section>
    )
}