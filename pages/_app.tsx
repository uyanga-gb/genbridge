import { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client';

import 'styles/global.scss'
import client from 'lib/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <ApolloProvider client={client}>
            <Layout>
                <Head>
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <meta name="keywords" content="mongolia, genbride"></meta>

                    <title>GenBride</title>
                    <meta name="description" content="GenBride" />
                    <meta property="og:title" content="GenBride" />
                    {/* <meta property="og:image" content={image} /> */}
                </Head>
                <Component {...pageProps} key={router.asPath} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
