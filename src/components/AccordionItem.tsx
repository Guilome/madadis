const AccordionItem = (props: { title: string, children: any, isOpen: boolean, onToggle: any }) => {
    return (
        <div onClick={props.onToggle} className="border-2 border-sky-950 rounded-2xl p-2 m-2 bg-sky-950">
            <div className="flex flex-row items-center justify-around">
                <p className="text-sky-50">{props.title}</p>
            </div>
            {props.isOpen && (
                <div className="p-4 text-sky-50">
                    {props.children}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;