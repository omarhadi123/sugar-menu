import TotalOrder from "@/components/TotalOrder";
import {useCartStore} from "@/store/cartStore";

function ConfirmMain() {
    const {cart} = useCartStore();

    return (
        <>
            <main className="w-full my-4 bg-rose-100 p-4 rounded-xl">
                {cart.map((cartItem) => (
                    <div
                        key={cartItem.id}
                        className="flex items-center justify-between py-4 border-b border-rose-500">
                        <div className="flex gap-2">
                            <img
                                src={cartItem.image.thumbnail}
                                alt=""
                                className="h-15 rounded-lg"
                            />
                            <div className="flex flex-col justify-between">
                                <h3 className="text-base font-semibold text-rose-900">
                                    {cartItem.name}
                                </h3>
                                <div className="">
                                    <span className="text-base text-red font-semibold pr-3">
                                        x{cartItem.quantity}
                                    </span>
                                    <span className="text-base text-rose-500">
                                        @ ${cartItem.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-rose-900 text-xl font-medium">
                            ${(cartItem.price * cartItem.quantity).toFixed(2)}
                        </h4>
                    </div>
                ))}
                <TotalOrder />
            </main>
        </>
    );
}

export default ConfirmMain;
