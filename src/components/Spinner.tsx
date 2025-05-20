const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center m-6">
            <div className="inline-block w-48 h-48 border-8 border-solid border-gray-300 rounded-full border-t-blue-400 animate-spin"></div>
            <h1 className="border-sky-950 text-5xl mt-4">Chargement en cours ...</h1>
        </div>
    );
};

export default Spinner;