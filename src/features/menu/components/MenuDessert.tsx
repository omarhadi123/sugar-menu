// import Image from "@/components/Image";
// import CartButton from "@/components/CartButton";
import {useCartStore} from "@/store/cartStore";
// import ItemDetails from "./ItemDetails";
import type {MenuItem} from "@/types/items.types";
import React, {memo, Suspense} from "react";

const Image = React.lazy(() => import("@/components/Image"));
const CartButton = React.lazy(() => import("@/components/CartButton"));
const ItemDetails = React.lazy(() => import("./ItemDetails"));

function MenuDessert({item, id}: {item: MenuItem; id: number}) {
    const {cart} = useCartStore();

    return (
        <>
            <Suspense>
                <div>
                    {/* Image holder */}
                    <div
                        className="w-full
                            relative
                            border-2 border-rose-200 shadow-sm rounded-xl"
                        style={{
                            borderColor:
                                cart.find((cartItem) => cartItem.id === id) &&
                                "red",
                        }}>
                        <Image
                            media={{
                                mobile: item.image.mobile,
                                tablet: item.image.tablet,
                                desktop: item.image.desktop,
                            }}
                            name={item.name}
                        />

                        <CartButton item={{...item, id: id}} />
                    </div>

                    <ItemDetails
                        category={item.category}
                        name={item.name}
                        price={item.price}
                    />
                </div>
            </Suspense>
        </>
    );
}

export default memo(MenuDessert);
