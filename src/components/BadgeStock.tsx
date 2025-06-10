const BadgeStock = (props: {statutStock: string}) => {

    const mapStock: Map<string, string> = new Map();
    mapStock.set("In Stock","En stock");
    mapStock.set("Low Stock","Stock bas");
    const badgeColor = props.statutStock === "In Stock" ? 'bg-green-500' : 'bg-amber-500';

    return (
        <div className="flex flex-row justify-center items-center content-center m-8">
            <p>{mapStock.get(props.statutStock)}</p>
            <span className={`text-white text-sm font-medium p-3 rounded-full m-2 ${badgeColor}`}></span>
        </div>
    );
};

export default BadgeStock;