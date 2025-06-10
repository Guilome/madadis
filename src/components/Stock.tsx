const Stock = (props: {quantiteInitiale: number, onChangeStock: any}) => {

    let quantites: number[] = [];
    for (let i = 1; i <= Math.round(props.quantiteInitiale); i++) {
        quantites.push(i);
    }

    const handleChangeAction = (event: any) => {
        props.onChangeStock(event.target.value);
    };

    if (props.quantiteInitiale == 0){
        return (
            <p>Nous sommes désolés mais les stocks sont vides. Nous réapprovisionnerons bientôt.</p>
        )
    } else {
        return (
            <div>
                <select className="h-16 border-1 border-solid border-sky-500 p-3 rounded-2xl text-2xl text-center align-middle"
                        onChange={handleChangeAction}
                        defaultValue={0}>
                    <option value="0" disabled>0</option>
                    {quantites.map((q: number, index: number) => (
                        <option key={index} value={q}>{q}</option>
                    ))}
                </select>
            </div>
        );
    }
};

export default Stock;