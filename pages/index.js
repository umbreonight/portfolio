import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Section, { SectionTitle } from 'components/section'
import Launcher from 'components/launcher'

export default function Home() {
  return (
    <>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Launcher title="Darren van Reenen" logo={"/images/logo192.png"} />
    </>
  )
}
