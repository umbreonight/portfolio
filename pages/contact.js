import Layout, { siteTitle } from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";
import MyLink from 'components/link';

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="contact" />
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </Section>
        </Layout>
    )
}