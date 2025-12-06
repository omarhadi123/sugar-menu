import {memo} from "react";
import {useMenuStore} from "@/store/menuStore";

import MenuHeader from "./MenuHeader";
import MenuDessert from "./MenuDessert";

function Menu() {
    const {menu} = useMenuStore();

    return (
        <>
            <main className="md:max-w-2/3 shrink">
                <MenuHeader />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                    {menu.map((item, index) => (
                        <MenuDessert key={index} item={item} id={index} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default memo(Menu);
