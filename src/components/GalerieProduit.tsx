import type {ImageGalerie} from "../services/type.ts";
import {useState} from "react";

const GalerieProduit = (props: { images: ImageGalerie[] }) => {

    const [mainImage, setMainImage] = useState(props.images[0]?.src);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    // Gère le clic sur une miniature
    const handleThumbnailClick = (image: ImageGalerie, index: number) => {
        setMainImage(image.src);
        setMainImageIndex(index);
    };

    return (
        <div className="mx-auto p-4 flex flex-col items-start md:space-x-8 lg:mb-6">
            <div className="relative w-full mb-4 md:mb-0">
                <img src={mainImage} alt={props.images[mainImageIndex]?.alt || 'Image principale du produit'} className="w-full h-auto object-contain"/>
            </div>
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 w-full md:w-1/3 lg:w-1/4 max-h-[500px]">
                {props.images.map((image, index) => (
                    <div key={image.id} onClick={() => handleThumbnailClick(image, index)}
                         className={`w-18 h-18 md:w-32 md:h-32 cursor-pointer rounded-lg overflow-hiddenborder-2 transition-all duration-200
                                    ${mainImageIndex === index ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-400'}`}>
                        <img src={image.src} alt={image.alt || `Miniature ${index + 1}`} className="w-fit h-fit object-contain rounded-lg hover:border-2 hover:border-sky-500"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalerieProduit;