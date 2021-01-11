import ProfileHeader from "./components/profile-header";
import Layout, { siteTitle } from "components/layout";
import Section from "components/section";
import Head from "next/head";
import ProfileContact from "./components/profile-contact";
import ScrollIndicator from "./components/scroll-indicator";

export default function Profile() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section profile>
                <ProfileHeader image={"/images/me.jpg"} title={"Darren van Reenen"} subtitle={"Front End Developer"} />
                <ProfileContact />
            </Section>
        </Layout>
    )
}