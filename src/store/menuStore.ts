import type {MenuItem} from "@/types/items.types";
import {create} from "zustand";

interface MenuState {
    menu: MenuItem[] | [];
    setMenu: (menu: MenuItem[]) => void;
}
export const useMenuStore = create<MenuState>((set) => ({
    menu: [],
    setMenu: (menu) => set({menu: menu}),
}));
