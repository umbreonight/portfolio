import Layout, {siteTitle} from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";

export default function Education () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Education" />
            </Section>
        </Layout>
    )
}