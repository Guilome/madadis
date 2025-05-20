import {useState} from "react";
import {FaChevronLeft} from "@react-icons/all-files/fa/FaChevronLeft";
import {FaChevronRight} from "@react-icons/all-files/fa/FaChevronRight";

const Carousel = (props:{ slides: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? props.slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === props.slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">

            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {props.slides.map((slide: any, index: number) => (
                    <div key={index} className="min-w-full h-full flex items-center justify-center bg-gray-200">
                        <img src={slide} alt={`carousel${index + 1}`} />
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-3 bg-white p-2 rounded-full shadow hover:bg-sky-500">
                <FaChevronLeft className="text-2xl text-sky-500 hover:text-sky-950" />
            </button>

            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-3 bg-white p-2 rounded-full shadow hover:bg-sky-500">
                <FaChevronRight className="text-2xl text-sky-500 hover:text-sky-950" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {props.slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-sky-500' : 'bg-gray-300'}`}/>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
