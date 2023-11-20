import {Slide} from "react-slideshow-image";

export default function SectionReviews({imageList}) {

    const defaultReviewImages = [
        `${process.env.PUBLIC_URL}/reviews/review1.jpg`,
        `${process.env.PUBLIC_URL}/reviews/review2.png`,
        `${process.env.PUBLIC_URL}/reviews/review3.png`,
        `${process.env.PUBLIC_URL}/reviews/review4.png`,
        `${process.env.PUBLIC_URL}/reviews/review5.png`,
        `${process.env.PUBLIC_URL}/reviews/review6.png`
    ];

    const reviews = imageList ?? defaultReviewImages;

    const sliderSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    
    return (
        <>
            <section className="section__reviews">
                <h1 className="sr__title">Отзывы</h1>
                <p className="sr__subtitle">
                    Прочитайте что говорят обо мне клиенты
                </p>

                <Slide
                    slidesToScroll={1}
                    slidesToShow={1}
                    indicators={false}
                    responsive={sliderSettings}
                >
                    {reviews.map((item, index) =>
                        <div className="each-slide-effect" key={index}>
                            <img src={item} alt=""/>
                        </div>
                    )}
                </Slide>

            </section>
        </>
    )
}