export interface CartParams {
    name: string;
    quantity: number;
    price: number;
}

export interface RemoveFromCartParams {
    itemId: number;
}

export interface CartHeaderParams {
    quantity: number;
}
