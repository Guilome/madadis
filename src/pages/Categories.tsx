import {useEffect, useState} from "react";
import apiService from "../services/serviceAPI.ts";
import Spinner from "../components/Spinner.tsx";
import {useNavigate} from "react-router-dom";

function Categories() {

    const navigate = useNavigate();
    const [listCategories, setCategories] = useState<string[]>();
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setStatus('pending');
        apiService.productService.getCategories()
            .then((response: string[]) => {
                setCategories(response);
                setStatus('success');
            })
            .catch((e: any) => {
                setStatus('error');
                setError(e);
            });
    }, []);

    if (status === 'error') return <h1>Error ! {error?.message}</h1>;
    if (status === 'pending') {
        return <div className="flex justify-center items-center">
            <Spinner/>
        </div>;
    }
    if (status === 'success') {

        const transformList = (listCategories: string[]) => {
            return listCategories.map(c => c.replace('-', ' ')).map(c => c.charAt(0).toUpperCase() + c.slice(1));
        }

        const goToProduit = (index: number)=> {
            const category = listCategories!.slice(index, index + 1)[0];
            navigate(`/produits/${category}`);
        }

        return (
            <div className="flex flex-row flex-wrap justify-center items-center">
                <ul className="flex flex-row flex-wrap justify-center items-center">
                {transformList(listCategories!).map((category, index) => (
                    <li onClick={() => goToProduit(index)}
                        className="rounded-4xl
                                 bg-sky-950
                                   p-6
                                   m-6
                                 text-blue-50
                                   text-4xl
                                   h-[150px]
                                   w-1/5
                                   content-center
                                   text-center
                                   hover:cursor-pointer
                                   hover:bg-sky-50
                                   hover:text-blue-950
                                   hover:border-4
                                   hover:border-blue-950">
                        {category}
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}

export default Categories;