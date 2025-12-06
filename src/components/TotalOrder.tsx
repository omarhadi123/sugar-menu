import {useCartStore} from "@/store/cartStore";

export default function TotalOrder() {
    const {getTotal} = useCartStore();

    return (
        <>
            <div className="w-full flex items-center justify-between px-2 py-4">
                <p className="font-semibold text-rose-900 text-base">
                    Order Total
                </p>
                <span className="font-bold text-rose-900 text-2xl">
                    ${getTotal().toFixed(2)}
                </span>
            </div>
        </>
    );
}
