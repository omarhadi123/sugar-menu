export interface MenuItem {
    id: number;
    name: string;
    category: string;
    image: {
        thumbnail: string;
        desktop: string;
        mobile: string;
        tablet: string;
    };
    price: number;
}

export interface CartItem extends MenuItem {
    quantity: number;
}
