import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-green-200 to-blue-200 py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center">
                    If you have any questions, feedback, or just want to say hello, feel free to reach out to us. We'd love to hear from you!
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            type="text" 
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="message" 
                            rows="5" 
                            placeholder="Your Message"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
