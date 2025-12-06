import {useCartStore} from "@/store/cartStore";
import React, {Suspense} from "react";

// const CartHeader = React.lazy(() => import("./CartHeader"));
const FullCart = React.lazy(() => import("./FullCart"));
const EmptyCart = React.lazy(() => import("./EmptyCart"));
import CartHeader from "./CartHeader";
// import FullCart from "./FullCart";
// import EmptyCart from "./EmptyCart";

function Cart() {
    const {cart, getQuantity} = useCartStore();
    return (
        <>
            <section
                className="md:w-1/3 lg:1/4
                bg-rose-50
            p-6 my-4
            rounded-xl
            relative">
                <CartHeader quantity={getQuantity()} />
                <Suspense>
                    {cart.length > 0 ? <FullCart /> : <EmptyCart />}
                </Suspense>
            </section>
        </>
    );
}

export default Cart;
