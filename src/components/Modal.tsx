function list(list: []) {
    return list.map((l: any) =>
        <p>{l.title}</p>
    );
}

function Modal(value: [] | string) {
    const texteModal = value instanceof Array ? list(value) : value;
    return (
        <dialog>
            <div className="title">
                <h1 id="titleModal"></h1>
            </div>
            <p id="texteModal">
                {texteModal}
            </p>
            <button className="close">Fermer</button>
        </dialog>
    );
}

export default Modal;
