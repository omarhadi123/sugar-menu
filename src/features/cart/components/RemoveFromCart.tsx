import {useCartStore} from "@/store/cartStore";
import removeIcon from "/assets/images/icon-remove-item.svg";
import type {RemoveFromCartParams} from "../types/cart.types";

export default function RemoveFromCart({itemId}: RemoveFromCartParams) {
    const {removeFromCart} = useCartStore();
    return (
        <>
            <img
                onClick={() => removeFromCart(itemId)}
                src={removeIcon}
                alt="icon-remove"
                className="h-6
                rounded-full border border-rose-500 hover:border-rose-900
                p-1
                cursor-pointer"
            />
        </>
    );
}
