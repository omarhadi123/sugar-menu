import type {MenuItem} from "@/types/items.types";
import AddCartButton from "./AddCartButton";
import {useCartStore} from "@/store/cartStore";
import IncQtyButton from "./IncQtyButton";

export default function CartButton({item}: {item: MenuItem}) {
    const {cart, addToCart} = useCartStore();
    const cartItem = cart.find((cartItem) => cartItem.id === item.id) || null;

    return (
        <>
            <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-1
            w-full
            flex items-center justify-center">
                {cartItem && cartItem?.quantity >= 1 ? (
                    <IncQtyButton cartItem={cartItem} />
                ) : (
                    <AddCartButton
                        addToCart={() => {
                            addToCart(item);
                        }}
                    />
                )}
            </div>
        </>
    );
}
