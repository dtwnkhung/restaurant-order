import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartProducts, products } from '../../testData';

interface CartState {
    products: Product[];
    productsList: Product[];
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const initialState: CartState = {
    // products: cartProducts,
    products: [],
    productsList: products,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            const product = state.products.find(p => p.id === action.payload.id);
            if (product) {
                // product.quantity += action.payload.quantity;
                product.quantity += 1;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.products = state.products.filter(p => p.id !== action.payload);
        },
        adjustQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
            const product = state.products.find(p => p.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
        clearCart: state => {
            state.products = [];
        },
    },
});

export const { addProduct, removeProduct, adjustQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
