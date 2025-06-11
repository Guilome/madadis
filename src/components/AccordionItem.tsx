const AccordionItem = (props: { title: string, children: any, isOpen: boolean, onToggle: any }) => {
    return (
        <div onClick={props.onToggle} className="border-2 border-sky-950 rounded-2xl p-2 m-2 bg-sky-950 w-full transition-all duration-300">
            <div className="flex flex-row items-center justify-around w-full">
                <p className="text-sky-50">{props.title}</p>
            </div>
            <div className={`p-4 w-full text-sky-50 break-words overflow-hidden transition-all duration-300 ${
                    props.isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                {props.children}
            </div>
        </div>
    );
};

export default AccordionItem;