import {useState} from "react";

const Stock = (props: {quantiteInitiale: number, onChangeStock: any}) => {
   const [quantite, setQuantite] = useState(props.quantiteInitiale);

    let quantites: number[] = [];
    for (let i = 0; i <= props.quantiteInitiale; i++) {
        quantites.push(i);
    }

    const handleChangeAction = (event: any) => {
        setQuantite(event.target.value);
        props.onChangeStock(quantite);
    };

    if (props.quantiteInitiale == 0){
        return (
            <p>Nous sommes désolés mais les stocks sont vides. Nous réapprovisionnerons bientôt.</p>
        )
    } else {
        return (
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                <select onChange={handleChangeAction}>
                    <option value="0" disabled selected>0</option>
                    {quantites.map((q: number) => (
                        <option value={q}>{q}</option>
                    ))}
                </select>
            </div>
        );
    }
};

export default Stock;