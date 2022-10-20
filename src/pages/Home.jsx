import { useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "aos/dist/aos.css"
import AOS from "aos"

export const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <>
            {/* Carousel For Homepage */}
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
            {/* Covid Policy 2 items */}
            <div className="bg-[url('./contour.svg')] bg-cover">
                <div className="bg-black/50">
                    <div data-aos="fade-up" className="flex justify-around items-center px-4 lg:px-16 lg:py-16 flex-col lg:flex-row bg-[#ffffff1b]">
                        <img className="h-[200px] lg:h-[400px]" src="./hero-clip.png" alt="hero-clip" />
                        <div className="flex flex-col text-center lg:text-left gap-3 lg:gap-6">
                            <h1 className="text-white text-4xl font-bold lg:text-left ">
                                Ensuring a safe ecosystem
                                for<br /> early learning
                            </h1>
                            <h2 className="text-white text-2xl font-bold lg:text-left opacity-70">
                                Read about our pre school resumption COVID-19 protocols.
                            </h2>
                            <button className="lg:text-left py-4 block w-full">
                                <button className="bg-[#0095E8] text-white px-4 py-2 rounded-full hover:scale-105 hover:animate-pulse ">
                                    Learn More
                                </button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 Key Points fro Homepage */}
            <div data-aos="fade-right" className="flex justify-around items-center px-20 gap-4 py-8 bg-gray-50 flex-col lg:flex-row">
                <div className="flex flex-col justify-center items gap-4">
                    <img className="h-[128px] object-contain p-2" src="./guitar.png" alt="Guitar" />
                    <h1 className="font-bold text-2xl text-center">Music Class</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis sed ut nulla? Cum dignissimos tempora impedit ea fugiat ducimus id, maxime, quas quis unde ipsum quia reiciendis ullam obcaecati?</p>
                </div>
                <div className="flex flex-col justify-center items gap-4 ">
                    <img className="h-[128px] object-contain p-2" src="./book.png" alt="Guitar" />
                    <h1 className="font-bold text-2xl text-center">Active Learning</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis sed ut nulla? Cum dignissimos tempora impedit ea fugiat ducimus id, maxime, quas quis unde ipsum quia reiciendis ullam obcaecati?</p>
                </div>
                <div className="flex flex-col justify-center items gap-4">
                    <img className="h-[128px] object-contain p-2" src="./lotus.png" alt="Guitar" />
                    <h1 className="font-bold text-2xl text-center">Yoga Class</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis sed ut nulla? Cum dignissimos tempora impedit ea fugiat ducimus id, maxime, quas quis unde ipsum quia reiciendis ullam obcaecati?</p>
                </div>
                <div className="flex flex-col justify-center items gap-4">
                    <img className="h-[128px] object-contain p-2" src="./kung.png" alt="Guitar" />
                    <h1 className="font-bold text-2xl text-center">Kung-Fu Class</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis sed ut nulla? Cum dignissimos tempora impedit ea fugiat ducimus id, maxime, quas quis unde ipsum quia reiciendis ullam obcaecati?</p>
                </div>
            </div>
            <div className="bg-[url('./coolbg.png')] bg-cover object-cover">
                <div className="bg-black/80">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex justify-center mr-60 pt-20">
                        <div className="bg-blue-500 w-96 h-40 rounded-sm">
                            <h1 className="font-bold text-2xl text-center">Morning</h1>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex justify-center ml-60 py-20">
                        <div className="bg-blue-500 w-96 h-40">
                            <h1 className="font-bold text-2xl text-center">Morning</h1>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex justify-center mr-60 ">
                        <div className="bg-blue-500 w-96 h-40">
                            <h1 className="font-bold text-2xl text-center">Morning</h1>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex justify-center ml-60 py-20">
                        <div className="bg-blue-500 w-96 h-40">
                            <h1 className="font-bold text-2xl text-center">Morning</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
