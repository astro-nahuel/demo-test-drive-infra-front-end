import Head from 'next/head'
import { colors } from 'styles/theme/colors'

export type OGProperties = {
    locale?: string
    url: string
    title: string
    type: 'article' | 'website'
    description: string
    site_name: string
    author?: string
    section?: string
    modified_time?: string
    published_time?: string
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    image: string
}

const OpenGraph = ({ properties }: { properties: OGProperties }) => {
    const { locale, url, site_name, title, type, description, image } =
        properties

    return (
        <Head>
            <title>{title || 'Grooploop'}</title>
            <link
                rel="preloaad"
                as="font"
                href="https://fonts.cdnfonts.com/css/gotham"
            />
            <link
                href="https://fonts.cdnfonts.com/css/gotham"
                rel="stylesheet"
            />
            <link rel="apple-touch-icon" href="/icons/icon-72x72.png" />
            <link rel="canonical" href={url} />
            <link rel="manifest" href="/manifest.json" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta
                name="description"
                content={
                    description ||
                    'Somos una Web-App que permite centralizar la información del evento y las respuestas de una determinada comunidad en un mismo sitio de una manera clara y simple.'
                }
            />
            <meta name="theme-color" content={colors.primaryMainColor} />
            <meta property="og:locale" content={locale || 'es'} />
            <meta property="og:title" content={title || 'Grooploop'} />
            <meta property="og:type" content={type} />
            <meta property="og:description" content={description || ''} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={site_name} />
            <meta property="og:image:width" content="640" />
            <meta property="og:image:height" content="640" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={image} />
        </Head>
    )
}

export default OpenGraph
