import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Section, { SectionTitle } from "components/section";
import Projects, { Project } from "./components/project"

export default function Home() {
    return (
        <Layout>
            {/* Keep the existing code here */}
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Projects" />
                <Projects>
                    <Project title="Dark Souls" subtitle="Prepare to Die Edition" image="images/dark-souls-4.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                    <Project title="Bloodborne" subtitle="The Old Hunters" image="images/bloodborne.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                    <Project title="Mass Effect" subtitle="Andromeda" image="images/hzd.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                    <Project title="Dark Souls" subtitle="Prepare to Die Edition" image="images/dark-souls-4.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                </Projects>
            </Section>
        </Layout>
    )
}