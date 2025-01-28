import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GET_PROGRAMS } from "src/lib/queries";
import HeroSection from "src/components/common/HeroSection";
import ProgramCard from "src/components/cards/ProgramCard";
import { Maybe, Program } from "graphql/generated";

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
    data.map((program: Program) =>
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

export default function ProgramsPage() {
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
                <title>Programs - GenBridge</title>
            </Head>

            {/* Hero Section */}
            <HeroSection
                title="Explore Our Programs"
                subtitle="Discover opportunities to learn, grow, and lead with GenBridge."
                buttonText1="Join Now"
                buttonText2="Get Involved"
                onButtonClick1={() => (window.location.href = "/get-involved")}
                onButtonClick2={() => (window.location.href = "/get-involved")}
            />

            {/* Programs Listing */}
            <div className="py-10 px-6 bg-gray-100">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
                    Available Programs
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
        </div>
    );
}
