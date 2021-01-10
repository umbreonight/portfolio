import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Section, { SectionTitle } from "components/section";
import MyLink from 'components/link';

export default function Welcome() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Projects" />
                <p>Since beginning my journey as a front end developer in 2015, I've worked for agencies as well as large corporates, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and and always willing to learn something I never knew I never knew.</p>
                <br></br>
                <MyLink href="/hub" text="go to hub"/>
            </Section>
        </Layout>
    )
}