import Head from "next/head";
import Main from "@/components/Index/Main/ui";
import InfoSection from "@/components/Index/InfoSection/ui";
import Features from "@/components/Index/Features/ui";
import LessInfoSection from "@/components/Index/LessInfoSection/ui";

export default function Index() {
  return (
    <>
        <Head>
            <meta name='title' content='Main Page'/>
            <meta name='description' content='app main page with content'/>
            <meta name='keywords' content='app main, app home'/>
            <title>Main Page</title>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="http://localhost:3000/contact"/>
            <meta property="og:title" content="Main page"/>
            <meta property="og:description" content="Information about us."/>
            <meta property="og:image" content="/Rick-Astley.webp"/>


            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content="http://localhost:3000/contact"/>
            <meta name="twitter:title" content="Contact Us"/>
            <meta name="twitter:description" content="Information about us."/>
            <meta name="twitter:image" content="/Rick-Astley.webp"/>
        </Head>
        <Main elements={[
            <InfoSection key='infoSection'/>,
            <Features key='Features'/>,
            <LessInfoSection key='LessInfoSection'/>
        ]}/>
    </>
  );
}