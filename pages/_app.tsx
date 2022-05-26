import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import metadata from '../data/metadata'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...metadata} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
