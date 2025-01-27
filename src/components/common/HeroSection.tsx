import React from 'react';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonText1: string;
    buttonText2: string;
    onButtonClick1: () => void;
    onButtonClick2: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     subtitle,
                                                     buttonText1,
                                                     buttonText2,
                                                     onButtonClick1,
                                                     onButtonClick2,
                                                 }) => {
    return (
        <section className="bg-blue-600 text-white text-center py-16">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 text-lg">{subtitle}</p>
            <div className="mt-6">
                <button
                    onClick={onButtonClick1}
                    className="bg-white text-blue-600 px-6 py-3 rounded mr-4"
                >
                    {buttonText1}
                </button>
                <button
                    onClick={onButtonClick2}
                    className="bg-yellow-500 text-black px-6 py-3 rounded"
                >
                    {buttonText2}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
