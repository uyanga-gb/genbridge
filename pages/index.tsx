import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { GET_PROGRAMS } from 'lib/queries'
import { Maybe, Program } from 'graphql/generated';

interface IProgram {
    id: string;
    title: Maybe<string> | undefined;
    location: Maybe<string> | undefined;
}

const getPrograms = (data: Program[]): IProgram[] => {
    if (!data) return [];

    const programs: IProgram[] = []
    data?.map((program: Program) =>
        programs.push({
            id: program?.databaseId.toString(),
            title: program?.title,
            location: program?.programsFields?.location,
        })
    )

    return programs;
}

export default function Index() {

    const { loading, error, data } = useQuery(GET_PROGRAMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const programs = getPrograms(data.programs.nodes);

    return (
        <div>
            <Head>
                <title>{`GenBridge`}</title>
            </Head>
            <div>
                <div className="container mx-auto flex flex-col gap-20">
                    {programs.map((program: IProgram) => (
                        <div key={program.id}>
                            <h1>{program.title}</h1>
                            <p>{program.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
