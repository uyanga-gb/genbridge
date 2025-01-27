import React from 'react';
import ProgramCard from '../cards/ProgramCard';

const ProgramHighlights = () => {
    const programs = [
        {
            title: 'Summer Camp',
            description: 'A 10-day immersive leadership camp.',
            imageUrl: '/images/summer-camp.jpg',
            link: '/programs',
        },
        {
            title: 'Volunteer Opportunities',
            description: 'Earn volunteer hours while making a difference.',
            imageUrl: '/images/volunteer.jpg',
            link: '/get-involved',
        },
    ];

    return (
        <div className="py-10 px-6 bg-gray-100">
            <h2 className="text-center text-2xl font-bold text-blue-600">
                Our Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {programs.map((program, index) => (
                    <ProgramCard
                        key={index}
                        title={program.title}
                        description={program.description}
                        imageUrl={program.imageUrl}
                        link={program.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgramHighlights;
