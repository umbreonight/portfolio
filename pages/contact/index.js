import Layout, { siteTitle } from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";
import Form from 'components/form';
import Input from "components/input";

export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="contact" />
                <Form name="contact" action="/contact/success">
                    <Input type="text" id="name" name="name" placeholder="Enter your name" label="name" />
                    <Input type="text" id="email" name="email" placeholder="Enter your email" label="email" />
                    <Input type="text" id="message" name="message" placeholder="Your message" label="message" />
                    <button type="submit">Send</button>
                </Form>
            </Section>
        </Layout>
    )
}