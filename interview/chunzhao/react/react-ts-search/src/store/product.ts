import {create} from 'zustand';
import type {Product} from '@/type/products';

interface ProductState {
    products: Product[];
    setProducts: (products: Product[]) => void;
}   

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    setProducts: (products: Product[]) => set({ products:products }),

}));

