import {SectionInfoBlock} from "@/components/shared/lib/SectionInfoBlock/SectionInfoBlock";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm/ui";
import {useState} from "react";
import Head from "next/head";

const StylizedSectionInfoBlock = styled(SectionInfoBlock)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 40px 0;
    
    & .InfoBlockTitle {
        visibility: hidden;
        position: absolute;
        width: 0;
        height: 0;
    }

    & h2,
    & .InfoBlockMessage {
        font-size: 80px;
        text-align: center;
        margin-bottom: 40px;
    }

    @media (max-width: 961px) {
        & h2,
        & .InfoBlockMessage {
            font-size: 40px;
        }
    }
`


export default function ContactUs() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [message, setMessage] = useState("");
    return (
        <>
            <Head>
                <meta name='title' content='Contact Us' />
                <meta name='description' content='Contact Us with form' />
                <meta name='keywords' content='contacts, form' />
                <title>Contact Us</title>


                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/contact" />
                <meta property="og:title" content="Contact Us" />
                <meta property="og:description" content="Reach out to us via our contact form." />
                <meta property="og:image" content="/Rick-Astley.webp" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="http://localhost:3000/contact" />
                <meta name="twitter:title" content="Contact Us" />
                <meta name="twitter:description" content="Reach out to us via our contact form." />
                <meta name="twitter:image" content="/Rick-Astley.webp" />
            </Head>
            <StylizedSectionInfoBlock>
                <h1 className='InfoBlockTitle'>Contact us Form</h1>
                <h2>Only CTA on the page</h2>
                {!isConfirmed
                    ? <ContactForm setIsConfirmed={setIsConfirmed} setMessage={setMessage} />
                    : <div className='InfoBlockMessage'>{message}</div>
                }
            </StylizedSectionInfoBlock>
        </>
    )
}