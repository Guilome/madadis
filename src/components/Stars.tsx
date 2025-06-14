import {FaStar} from "@react-icons/all-files/fa/FaStar";

const Stars = (props: { fraction: number }) => {

    const fill = props.fraction * 100;

    return (
        <div className="relative w-8 h-8 text-yellow-500 text-3xl">
            <FaStar className="absolute text-gray-300" />
            <FaStar
                className="relative top-0 left-0 overflow-hidden text-yellow-500"
                style={{
                    color: '#f0b100',
                    clipPath: `inset(0 ${100 - fill}% 0 0)`,
                }}
            />
        </div>
    );
};

export default Stars;