import React, {memo, Suspense} from "react";

// const Menu = React.lazy(() => import("@/features/menu/components/Menu"));
const Cart = React.lazy(() => import("@features/cart/components/Cart"));
import Menu from "@/features/menu/components/Menu";
// import Cart from "@features/cart/components/Cart";

function Home() {
    return (
        <>
            <main
                className="
                w-full h-screen
                p-6 lg:px-12
            md:flex items-start justify-center gap-8">
                <Menu />
                <Suspense>
                    <Cart />
                </Suspense>
            </main>
        </>
    );
}

export default memo(Home);
