import emtyCart from "/assets/images/illustration-empty-cart.svg";

export default function EmptyCart() {
    return (
        <>
            <div className="grid place-items-center my-4 w-full">
                <img
                    src={emtyCart}
                    alt="An empty cart illustartion"
                    className=""
                />
                <p className="text-base text-center text-rose-500 font-semibold my-2">
                    Your added items will appear here
                </p>
            </div>
        </>
    );
}
