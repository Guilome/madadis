import {useEffect, useState} from "react";
import apiService from "../services/serviceAPI.ts";

function Categories() {

    const [listCategories, setCategories] = useState<string[]>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        apiService.productService.getCategories()
            .then((response: any) => {
                setCategories(response);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);
    if (status === 'pending') return <h1>Loading...</h1>;
    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'success') {
        return (
            <div className="flex flex-row flex-wrap justify-center items-center">
                <ul>
                {listCategories!.map((category) => (
                    <li>{category}</li>
                ))}
                </ul>
            </div>
        );
    }
}

export default Categories;