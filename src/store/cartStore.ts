import type {CartItem, MenuItem} from "@/types/items.types";
import {create} from "zustand";

interface CartState {
    cart: CartItem[];
    addToCart: (newItem: MenuItem) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
    decQty: (itemId: number) => void;
    incQty: (itemId: number) => void;
    getTotal: () => number;
    getQuantity: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addToCart: (newItem) => {
        set({
            cart: [...get().cart, {...newItem, quantity: 1}],
        });
    },
    removeFromCart: (itemId) => {
        set({cart: get().cart.filter((item) => item.id !== itemId)});
    },
    clearCart: () => set({cart: []}),
    decQty: (itemId) => {
        set({
            cart: get().cart.map((item) =>
                item.id === itemId
                    ? {...item, quantity: item.quantity - 1}
                    : item
            ),
        });
    },
    incQty: (itemId) => {
        set({
            cart: get().cart.map((item) =>
                item.id === itemId
                    ? {...item, quantity: item.quantity + 1}
                    : item
            ),
        });
    },
    getTotal: () =>
        get().cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
    getQuantity: () =>
        get().cart.reduce((quantity, item) => quantity + item.quantity, 0),
}));
