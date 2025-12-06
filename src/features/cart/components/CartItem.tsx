import type {CartParams} from "../types/cart.types";

export default function CartItem({name, quantity, price}: CartParams) {
    return (
        <>
            <div className="">
                <p
                    className="text-base text-rose-900 font-semibold
                py-1">
                    {name}
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-lg text-red font-bold">
                        {quantity}x
                    </span>
                    <span
                        className="text-base text-rose-500
                    ">
                        @${price.toFixed(2)}
                    </span>
                    <span className="text-base font-semibold text-rose-500">
                        ${(quantity * price).toFixed(2)}
                    </span>
                </div>
            </div>
        </>
    );
}
