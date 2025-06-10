import type {Detail} from "../services/type.ts";

const DetailsProduit = (props: {details: Detail}) => {

    return (
        <div className="flex flex-col flex-wrap">
            <h1 className="m-3">Information général produit :</h1>
            <table>
                <tbody>
                    <tr className="border-1 border-sky-50">
                        <th>Tags</th>
                        <td>
                            {props.details.tags.map((tag: string, index: number) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Assurance</th>
                        <td>{props.details.warrantyInformation}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Envoie</th>
                        <td>{props.details.shippingInformation}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Retour</th>
                        <td>{props.details.returnPolicy}</td>
                    </tr>
                </tbody>
            </table>
            <h1 className="m-3">Dimension produit :</h1>
            <table>
                <tbody>
                    <tr className="border-1 border-sky-50">
                        <th>Largeur</th>
                        <td>{props.details.dimensions.width}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Hauteur</th>
                        <td>{props.details.dimensions.height}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Profondeur</th>
                        <td>{props.details.dimensions.depth}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Poids</th>
                        <td>{props.details.weight}</td>
                    </tr>
                </tbody>
            </table>
            <h1 className="m-3">Information produit :</h1>
            <table>
                <tbody>
                    <tr className="border-1 border-sky-50">
                        <th>Création</th>
                        <td>{new Intl.DateTimeFormat('fr-FR').format(new Date(props.details.meta.createdAt))}</td>
                    </tr>
                    <tr className="border-1 border-sky-50">
                        <th>Mise à jour</th>
                        <td>{new Intl.DateTimeFormat('fr-FR').format(new Date(props.details.meta.updatedAt))}</td>
                    </tr>
                </tbody>
            </table>
        </div>
)
    ;
};

export default DetailsProduit;