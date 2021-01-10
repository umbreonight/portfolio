import Layout, {siteTitle} from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";
import MyLink from 'components/link';

export default function Hub () {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Hub" />
                <MyLink href="/education" text="Education"/>
                <MyLink href="/experience" text="Experience"/>
                <MyLink href="/profile" text="Profile"/>
            </Section>
        </Layout>
    )
}