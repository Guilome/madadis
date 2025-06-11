import {useCart} from "../services/CartContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

function Panier() {
    const { cart, removeFromCart, clearCart, total } = useCart();

    return (
        <div className="p-4 border shadow-md rounded-2xl border-sky-500 w-3/4">
            <h2 className="text-4xl font-bold mb-4 text-sky-950">Panier</h2>
            {cart.length === 0 && <p className="text-xl font-bold mb-4 text-sky-500">Le panier est vide.</p>}

            {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                    <div className="flex flex-row flex-wrap items-center">
                        <img className="h-[100px] w-[100px] m-2" src={item.images[0]} alt={item.title}/>
                        <div className="flex flex-col items-start">
                            <p className="lg:text-2xl">{item.title}</p>
                            <p className="text-sm text-sky-700">Quantité : {item.quantity}</p>
                        </div>
                        <p className="text-sm text-sky-700 lg:text-2xl mx-8">{(item.price * item.minimumOrderQuantity).toFixed(2)} €</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>
                        <FontAwesomeIcon className="text-blue-300 m-2" icon={faXmark} size="xl" />
                    </button>
                </div>
            ))}

            {cart.length > 0 && (
                <>
                    <p className="mt-4 font-semibold lg:text-3xl">Total : {total.toFixed(2)} €</p>
                    <button onClick={clearCart} className="mt-2 px-4 py-2 rounded">
                        <FontAwesomeIcon className="text-blue-300" icon={faTrash} size="xl" />
                    </button>
                </>
            )}
        </div>
    );
}

export default Panier;