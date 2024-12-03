import React from 'react';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-green-200 to-blue-200 py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Welcome to Savoury, your go-to platform for delicious meals delivered right to your doorstep.
                    We are passionate about food and committed to providing you with the best dining experience.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Our journey started in 2023 with a mission to bring together food lovers and the best restaurants
                    in town. At Savoury, we believe in quality, convenience, and exceptional customer service.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Whether you're craving a quick bite or planning a feast, Savoury has got you covered. Explore our
                    wide range of cuisines and dishes, carefully curated to satisfy every palate.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Thank you for choosing Savoury. We look forward to serving you and making your food ordering
                    experience delightful and hassle-free.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
