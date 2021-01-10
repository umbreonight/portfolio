import Layout, { siteTitle } from "components/layout";
import Section, { SectionTitle } from "components/section";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.scss"
import ExperienceItem from "./components/experience-item";

export default function Experience() {
    const jobs = [
        {
            duration: "Sept 2019 - Nov 2020",
            employer: "Ole!Connect",
            position: "Intermediate Front End Developer",
            overview: "Mobile app and responsive web development. Building front end user interfaces with ReactJS and integrating with back end logic using AdonisJS. Full stack development of internal development projects.",
            duties: [
                "Front end UI library development",
                "Mobile and PWA development with ReactJS",
                "Conceptualising and designing UI component libraries for responsive web development.",
                "Bug fixes and rapid deployment to staging and live production websites and mobile web applications"
            ]
        },
        {
            duration: "Mar 2017 - Jul 2019",
            employer: "VML South Africa",
            position: "Junior Front End Developer",
            overview: "Two years working on Old Mutual South Africa Transformation project. During my time here I worked from concept to development alongside Experience Designers and UI Designers to produce a completely digital solution to an otherwise paper-based process.",
            duties: [
                "Front end development for corporate ui kit and sales platforms",
                "Version control and technical documentation management using the Atlassian software suite; including BitBucket, Jira, and Confluence.",
            ]
        }
    ]

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <Section>
                <SectionTitle text="Experience" />
                <div className={utilStyles.experienceItems}>
                    {
                        jobs.map((job, index) => {
                            return <ExperienceItem key={index} duration={job.duration} employer={job.employer} position={job.position} overview={job.overview} duties={job.duties} />
                        })
                    }
                </div>
            </Section>
        </Layout>
    )
}