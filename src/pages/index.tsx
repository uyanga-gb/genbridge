import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_HOMES } from 'src/lib/queries';
import { GET_PROGRAMS } from 'src/lib/queries';
import { Maybe, Program } from 'graphql/generated';
import HeroSection from '../components/common/HeroSection';
import ProgramCard from '../components/cards/ProgramCard';
import AboutGenBridge from '../components/home/AboutGenBridge';

interface IProgram {
    id: string;
    title: Maybe<string> | undefined;
    location: Maybe<string> | undefined;
    description: Maybe<string> | undefined;
    imageUrl: Maybe<string> | undefined;
    isFeatured: Maybe<boolean> | undefined;
    status: Maybe<Maybe<string>[]> | undefined;
}

const getPrograms = (data: Program[]): IProgram[] => {
    if (!data) return [];

    const programs: IProgram[] = [];
    data?.map((program: Program) =>
        programs.push({
            id: program?.databaseId.toString(),
            title: program?.title,
            location: program?.programsFields?.location,
            isFeatured: program?.programsFields?.isFeatured,
            status: program?.programsFields?.status,
            imageUrl: program?.featuredImage?.node?.mediaItemUrl,
            description: program?.content,
        })
    );

    return programs;
};

export default function Index() {
    const { loading1, error1, data1 } = useQuery(GET_PROGRAMS);
    const { loading2, error2, data2 } = useQuery(GET_HOMES);

    if (loading1 || loading2)
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    if (error1 || error2)
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error: {error.message}</p>
            </div>
        );

    const programs = getPrograms(data1.programs.nodes);

    return (
        <div>
            <Head>
                <title>GenBridge</title>
            </Head>

            {/* Hero Section */}
            <HeroSection
                title="Empowering Youth for a Better Future"
                subtitle="Connect, Learn, and Grow with GenBridge"
                buttonText1="Learn More"
                buttonText2="Join Now"
                onButtonClick1={() => (window.location.href = '/programs')}
                onButtonClick2={() => (window.location.href = '/get-involved')}
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
                            title={program.title || "Untitled"}
                            description={program.description || "No description available."}
                            imageUrl={program.imageUrl || "/images/program-default.jpg"}
                            status={program.status}
                            link={`/programs/${program.id}`} // Dynamic link to program details
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
