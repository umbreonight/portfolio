import ProfileHeader from "./components/profile-header";
import Layout, { siteTitle } from "components/layout";
import Section from "components/section";
import Head from "next/head";
import ProfileSkills from "./components/profile-skills";

export default function Profile() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <ProfileHeader image={"/images/me.jpg"} title={"Darren van Reenen"} subtitle={"Front End Developer"} />
                <ProfileSkills />
            </Section>
        </Layout>
    )
}