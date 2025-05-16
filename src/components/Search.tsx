import serviceApi from "../services/serviceAPI.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

// utiliser un UseSTate ?

function SearchInput() {
    return (
        <div className="flex border-1 border-solid border-sky-500 rounded-4xl overflow-hidden bg-sky-50 w-[300px] h-10 px-4 mr-8">
            <input className="grow border-none outline-none bg-transparent text-lg w-full h-full" type="text" onChange={e => serviceApi.productService.searchProduct(e.target.value)} />
            <FontAwesomeIcon className="text-lg text-sky-500 self-center" icon={faMagnifyingGlass} />
        </div>
    );
}

export default SearchInput;
