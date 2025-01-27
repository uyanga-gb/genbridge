import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_PROGRAMS } from 'src/lib/queries';
import { Maybe, Program } from 'graphql/generated';
import HeroSection from '../components/common/HeroSection';
import ProgramCard from '../components/cards/ProgramCard';
import AboutGenBridge from '../components/home/AboutGenBridge';

interface IProgram {
    id: string;
    title: Maybe<string> | undefined;
    location: Maybe<string> | undefined;
}

const getPrograms = (data: Program[]): IProgram[] => {
    if (!data) return [];

    const programs: IProgram[] = [];
    data?.map((program: Program) =>
        programs.push({
            id: program?.databaseId.toString(),
            title: program?.title,
            location: program?.programsFields?.location,
        })
    );

    return programs;
};

export default function Index() {
    const { loading, error, data } = useQuery(GET_PROGRAMS);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    if (error)
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error: {error.message}</p>
            </div>
        );

    const programs = getPrograms(data.programs.nodes);

    return (
        <div>
            <Head>
                <title>GenBridge</title>
            </Head>

            {/* Hero Section */}
            <HeroSection
                title="Empowering Youth for a Better Future"
                subtitle="Connect, Learn, and Grow with GenBridge"
                buttonText1="Join Now"
                buttonText2="Explore Programs"
                onButtonClick1={() => (window.location.href = '/get-involved')}
                onButtonClick2={() => (window.location.href = '/programs')}
            />

            {/* Programs Section */}
            <div className="py-10 px-6 bg-gray-100">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
                    Our Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programs.map((program: IProgram) => (
                        <ProgramCard
                            key={program.id}
                            title={program.title || 'Untitled'}
                            description={`Location: ${program.location || 'TBD'}`}
                            imageUrl="/images/default-program.jpg" // Replace with a real image URL
                            link="/programs" // Replace with a dynamic link if available
                        />
                    ))}
                </div>
            </div>

            {/* About GenBridge Section */}
            <AboutGenBridge />

            {/* Call-to-Action */}
            <div className="bg-blue-500 text-white text-center py-10">
                <h2 className="text-2xl font-bold">Ready to Make a Difference?</h2>
                <button
                    onClick={() => (window.location.href = '/get-involved')}
                    className="bg-yellow-500 text-black px-6 py-3 mt-4 rounded"
                >
                    Get Involved Today!
                </button>
            </div>
        </div>
    );
}
