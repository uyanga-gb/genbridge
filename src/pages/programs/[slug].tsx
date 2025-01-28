import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GET_PROGRAM } from "src/lib/queries";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ProgramPage() {
    const router = useRouter();
    const { slug } = router.query;
    const { loading, error, data } = useQuery(GET_PROGRAM, {
        variables: { id: slug },
    });

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

    return (
        <div>
            <Head>
                <title>Programs - GenBridge</title>
            </Head>

            {/* Programs Listing */}
            <div className="py-10 px-6 bg-gray-100">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
                    {data.program.title}
                </h2>
                <div className="gap-6 text-black">
                    <div className="relative h-96 w-full">
                        <Image src={data.program.featuredImage.node.mediaItemUrl} alt={data.program.title} className="w-full h-48 object-cover" fill />
                    </div>
                    <div className="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: data.program.content }} />
                    <div>Location: {data.program.programsFields.location}</div>
                </div>
            </div>
        </div>
    );
}
