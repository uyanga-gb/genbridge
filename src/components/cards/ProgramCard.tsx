import React from 'react';
import Image from 'next/image';
import { Maybe } from 'graphql/generated';

interface ProgramCardProps {
    title: string;
    description: string;
    imageUrl: string;
    status: Maybe<Maybe<string>[]> | undefined;
    link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
    title,
    description,
    imageUrl,
    status,
    link,
}) => {
    return (
        <div className="bg-white border rounded-lg shadow-md overflow-hidden relative">
            <span className='absolute text-gray-700 bg-white p-1'>{status}</span>
            <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={300} height={300} />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: description }} />
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
