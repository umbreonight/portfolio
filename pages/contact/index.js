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
                <form name="contact" method="POST" action="/contact/success" data-netlify="true">
                    <input type='hidden' name='form-name'
                        value='contact' />
                    <p>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </p>
                    <p>
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </Section>
        </Layout>
    )
}