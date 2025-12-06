import {useCartStore} from "@/store/cartStore";
import {NavLink, useLocation} from "react-router";

export default function OrderButton({children}: {children: string}) {
    const location = useLocation();
    const pathname = location.pathname === "/" ? "/confirm" : "/";
    const {clearCart} = useCartStore();
    return (
        <>
            <NavLink to={pathname}>
                <button
                    onClick={() => {
                        if (pathname === "/") {
                            clearCart();
                        }
                    }}
                    className="cursor-pointer
        text-base text-rose-50 font-semibold
        w-full
        py-3 my-4 
        bg-red hover:brightness-80
        rounded-full">
                    {children}
                </button>
            </NavLink>
        </>
    );
}
