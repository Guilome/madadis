
import main_image from "../assets/e-commerce_main.png"

function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <img src={main_image} alt="main"/>
            </div>
            <div className="w-[100%] h-1/2">
            </div>
        </div>
    );
}

export default Home; 