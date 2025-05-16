const Spinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-sky-500 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-sky-300 animate-pulse delay-150"></div>
            <h1>Chargement en cours ...</h1>
        </div>
    );
};

export default Spinner;