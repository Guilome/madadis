import {useState} from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Données envoyées :', formData);
        alert("Message envoyé !");
        setFormData({ name: '', email: '', message: '' }); // Reset
    };

    return (
        <div className="mx-3 my-6 p-6 bg-sky-950 w-full rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-sky-50">Contactez-nous</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-row flex-wrap w-full justify-around">
                    <div className="flex flex-col items-start justify-center sm:flex-1/4 sm:pr-4 max-sm:w-full">
                        <label htmlFor="name" className="block text-sky-50 font-semibold">Nom</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                               className="w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring focus:ring-blue-200"/>
                    </div>
                    <div className="flex flex-col items-start justify-center sm:flex-2/4 max-sm:w-full">
                        <label htmlFor="email" className="block text-sky-50 font-semibold">Email</label>
                        <input
                            type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring focus:ring-blue-200"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sky-50 font-semibold">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-sky-500 rounded-md focus:outline-none focus:ring focus:ring-blue-200"></textarea>
                </div>
                <button type="submit" className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition">
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default Contact;