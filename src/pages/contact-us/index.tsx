import {SectionInfoBlock} from "@/components/shared/lib/SectionInfoBlock/SectionInfoBlock";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm/ui";
import {useState} from "react";

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
        <StylizedSectionInfoBlock>
            <h1 className='InfoBlockTitle'>Contact us Form</h1>
            <h2>Only CTA on the page</h2>
            {!isConfirmed
                ? <ContactForm setIsConfirmed={setIsConfirmed} setMessage={setMessage} />
                : <div className='InfoBlockMessage'>{message}</div>
            }
        </StylizedSectionInfoBlock>
    )
}