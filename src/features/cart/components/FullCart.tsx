import {useCartStore} from "@/store/cartStore";
import CartItem from "./CartItem";
import RemoveFromCart from "./RemoveFromCart";
import TotalOrder from "@components/TotalOrder";
import OrderButton from "../../../components/OrderButton";

function FullCart() {
    const {cart} = useCartStore();
    return (
        <>
            <div className="w-full">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between
                            py-4
                            border-b">
                        <CartItem
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                        />
                        <RemoveFromCart itemId={item.id} />
                    </div>
                ))}
                <TotalOrder />
            </div>
            <OrderButton>Confirm Order</OrderButton>
        </>
    );
}

export default FullCart;
