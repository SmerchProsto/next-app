import Head from "next/head";
import Main from "@/components/Index/Main/ui";
import InfoSection from "@/components/Index/InfoSection/ui";
import Features from "@/components/Index/Features/ui";
import LessInfoSection from "@/components/Index/LessInfoSection/ui";

export default function Index() {
  return (
    <>
      <Head>
        <meta name='title' content='Main Page' />
        <meta name='keywords' content='app main page with content' />
        <meta name='description' content='app main, app home' />
      </Head>
        <Main elements={[
            <InfoSection key='infoSection'/>,
            <Features key='Features'/>,
            <LessInfoSection key='LessInfoSection'/>
        ]} />
    </>
  );
}