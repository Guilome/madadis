import AccordionItem from "./AccordionItem.tsx";
import {useState} from "react";

const Accordion = (props: { items: any[] }) => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index: any) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col p-4 m-6">
            {props.items.map((item: any, index: number) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;