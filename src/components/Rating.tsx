import Stars from "./Stars.tsx";

const Rating = (props: { note: number }) => {

    const numberOfWholeParts = Math.floor(props.note);
    const fractionalPart = props.note - numberOfWholeParts;
    const parts = Array(numberOfWholeParts).fill(1);

    if (fractionalPart > 0) {
        parts.push(Math.round(fractionalPart*100)/100);
    }

    if (parts.length < 5) {
        for (let i = parts.length; i < 5; i++) {
            parts.push(0);
        }
    }

    const etoiles = Array.from({ length: 5 }, (_, index) => (
        <Stars key={index} fraction={parts[index]}/>
    ));

    return (
        <div className="flex">
            {etoiles}
        </div>
    );
};

export default Rating;