import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export const Home = () => {
    return (
        <>
            <div className="h-20">
                <Carousel showThumbs={false} stopOnHover={false} showStatus={false} infiniteLoop autoPlay>
                    <div>
                        <img src="./hero1.png" />
                    </div>
                    <div>
                        <img src="./hero2.png" />
                    </div>
                    <div>
                        <img src="./hero3.png" />
                    </div>
                    <div>
                        <img src="./hero4.png" />
                    </div>
                </Carousel>
            </div>
            <div>
                Best Place for Your child's Future
            </div>
        </>
    )
}
