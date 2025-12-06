import type {CartHeaderParams} from "../types/cart.types";

export default function CartHeader({quantity}: CartHeaderParams) {
    return (
        <>
            <h1 className="text-3xl md:max-lg:text-2xl text-red font-bold">
                Your Cart ({quantity})
            </h1>
        </>
    );
}
