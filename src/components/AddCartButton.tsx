import cartIcon from "/assets/images/icon-add-to-cart.svg";
export default function AddCartButton({addToCart}: {addToCart: () => void}) {
    return (
        <>
            <button
                onClick={() => {
                    addToCart();
                }}
                className="flex
                    text-rose-900 text-sm font-semibold
                    py-3 px-8
                    bg-rose-50
                    border border-rose-300 rounded-full hover:border-red
cursor-pointer">
                <img src={cartIcon} alt="" className="pr-2" /> Add to Cart
            </button>
        </>
    );
}
