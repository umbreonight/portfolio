import Layout, { siteTitle } from "components/layout";
import Section, { SectionTitle } from "components/section";
import Form from "components/form"
import Input from "components/input"
import MyLink from 'components/link';
import Head from "next/head";

export default function Hub() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Hub" />
                <MyLink href="/education" text="Education" />
                <MyLink href="/experience" text="Experience" />
                <MyLink href="/profile" text="Profile" />
                <MyLink href="/contact" text="Contact" />
            </Section>

            <Form name="contact">
                <Input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    label="Username"
                />
            </Form>
        </Layout>
    )
}