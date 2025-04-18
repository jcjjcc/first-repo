
// use开头的函数
// 复用 响应式业务 自定义hooks函数

import {
    useState,
    useCallback,
    useEffect,
} from 'react';

import {
    getProducts,
    searchProducts
} from '@/api/products';
import { debounce } from '@/utils/debounce';
import { useProductStore } from '@/store/product';

export const useProducts = () => {
    const [loading, setLoading] = useState(false);
    const {products, setProducts} = useProductStore();

    const fetchProducts = async () => {
        setLoading(true);
        try{
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            
        } finally {
            setLoading(false); 
        }
    }

    const searchProducts = useCallback(debounce(async (keyword: string) => {
        setLoading(true);
        try{
            const data = await searchProducts(keyword);
            setProducts(data); 
        } catch (error) {
            
        } finally {
            setLoading(false);  
        }
    },200),[])

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
       loading,
       products,
       searchProducts, 
    }
}