import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import AppBar from "components/app-bar"

const name = 'Your Name'
export const siteTitle = 'Darren van Reenen | Portfolio'

export default function Layout({ children, home }) {
    const name = 'Darren'
    return (
        <>
            {!home ? <AppBar back /> : <AppBar />}
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <main>{children}</main>
            </div>
        </>
    )
}