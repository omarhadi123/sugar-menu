import {useCartStore} from "@/store/cartStore";
import type {CartItem} from "@/types/items.types";

export default function IncQtyButton({cartItem}: {cartItem: CartItem}) {
    const {removeFromCart, decQty, incQty} = useCartStore();

    return (
        <>
            <div
                className="flex gap-8 items-center
            bg-red
            py-2 px-7
            rounded-full">
                <button
                    onClick={() => {
                        if (cartItem !== undefined) {
                            decQty(cartItem?.id);
                            if (cartItem.quantity <= 1) {
                                removeFromCart(cartItem.id);
                            }
                        }
                    }}
                    className="group
                    w-5 h-5
                    p-1
                    cursor-pointer
                    border border-rose-50 rounded-full
                    hover:bg-rose-50">
                    <div
                        className="w-full h-full
                        bg-[url('/assets/images/icon-decrement-quantity.svg')] bg-no-repeat bg-center
                        group-hover:bg-[url('/assets/images/active-icon-decrement-quantity.svg')]
                        ">
                        {/* Decrement Quantity */}
                    </div>
                </button>
                <p className="text-lg text-rose-50">{cartItem?.quantity}</p>
                <button
                    onClick={() => {
                        if (cartItem !== undefined) {
                            incQty(cartItem.id);
                        }
                    }}
                    className="group w-5 h-5
                    p-1
                    cursor-pointer
                    border border-rose-50 rounded-full
                    hover:bg-rose-50">
                    <div className="w-full h-full bg-[url('/assets/images/icon-increment-quantity.svg')] group-hover:bg-[url('/assets/images/active-icon-increment-quantity.svg')]">
                        {/* Increment Quantity */}
                    </div>
                </button>
            </div>
        </>
    );
}
