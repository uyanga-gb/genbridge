import React from 'react';

interface ProgramCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
                                                     title,
                                                     description,
                                                     imageUrl,
                                                     link,
                                                 }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
                <a
                    href={link}
                    className="text-blue-600 hover:underline mt-4 inline-block"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default ProgramCard;
