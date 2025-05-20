import type {Review} from "../services/type.ts";
import Rating from "./Rating.tsx";

const Avis = (props: {review: Review}) => {

    const review = props.review;
    const reviewDate = new Intl.DateTimeFormat('fr-FR').format(new Date(review.date));

    return (
        <div className="flex flex-col border-1 p-4 m-6 rounded-xl border-sky-950">
            <div className="flex flex-row items-center">
                <p className="font-bold mr-10">{review.reviewerName}</p>
                <Rating note={review.rating} />
            </div>
            <hr className="border-t-2 border-sky-500 my-4" />
            <div className="flex">
                <p>{review.comment}</p>
            </div>
            <hr className="border-t-2 border-sky-500 my-4" />
            <div className="flex">
                <p className="font-bold">{reviewDate}</p>
            </div>
        </div>
    );
};

export default Avis;