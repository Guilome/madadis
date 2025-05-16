import axios from "axios";
import type {Product, ResponseProduct} from "./type.ts";

const API_BASE_URL = 'https://dummyjson.com';

const api = axios.create({
    baseURL: API_BASE_URL
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Erreur API:', error);
        return Promise.reject(error);
    }
);

const productService = {
    getAllProducts: async (limit?: number, skip?: number) => {
        try {
            if (limit && !skip) {
                return api.get<ResponseProduct>(`/products?limit=${limit}`)
                    .then((response) => {
                        return response.data;
                    });
            } else if (skip && !limit) {
                return api.get<ResponseProduct>(`/products?skip=${skip}`)
                    .then((response) => {
                        return response.data;
                    });
            } else if (limit && skip) {
                return api.get<ResponseProduct>(`/products?limit=${limit}&skip=${skip}`)
                    .then((response) => {
                        return response.data;
                    });
            } else {
                return api.get<ResponseProduct>('/products')
                    .then((response) => {
                        return response.data;
                    });
            }
        } catch (error) {
            throw error;
        }
    },

    searchProduct: async (string: string) => {
        try {
            return api.get<ResponseProduct>(`/products/search?q=${string}`)
                .then((response) => {
                    console.log(response.data);
                    return response.data;
                });
        } catch (error) {
            throw error;
        }
    },

    getProduct: async (id: string) => {
        try {
            return api.get<Product>(`/products/${id}`)
                .then((response) => {
                    return response.data;
                });
        } catch (error) {
            throw error;
        }
    },

    getCategories: async () => {
        try {
            return api.get<string[]>('/products/category-list')
                .then((response) => {
                    return response.data;
                });
        } catch (error) {
            throw error;
        }
    },

    getProductsByCategory: async (category: string) => {
        try {
            return api.get<ResponseProduct>(`/products/category/${category}`)
                .then((response) => {
                    return response.data;
                });
        } catch (error) {
            throw error;
        }
    }
};

const authService = {
    login: async (username: string, password: string) => {
        try {
            const response = await api.post(`/auth/login`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // getLoginInfo: async (email: string) => {}
}

export default {productService, authService};