import Layout, { siteTitle } from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";

export default function ContactSuccess() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="contact" />
                <h4>Thank you for your contact. We'll be in touch.</h4>
            </Section>
        </Layout>
    )
}