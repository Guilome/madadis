import AppRouter from "./Router.tsx";
import {CartProvider} from "./services/CartContext.tsx";

function App() {
    return (
        <CartProvider>
            <AppRouter/>
        </CartProvider>
    )
}

export default App;
