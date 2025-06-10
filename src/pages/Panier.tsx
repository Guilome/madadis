import {useCart} from "../services/CartContext.tsx";

function Panier() {
    const { cart, removeFromCart, clearCart, total } = useCart();

    return (
        <div className="p-4 border rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Panier</h2>
            {cart.length === 0 && <p>Le panier est vide.</p>}

            {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                    <div>
                        <p>{item.title}</p>
                        <p className="text-sm text-gray-500">{item.quantity} × {item.price} €</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-sm">
                        Supprimer
                    </button>
                </div>
            ))}

            {cart.length > 0 && (
                <>
                    <p className="mt-4 font-semibold">Total : {total.toFixed(2)} €</p>
                    <button onClick={clearCart} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                        Vider le panier
                    </button>
                </>
            )}
        </div>
    );
}

export default Panier;