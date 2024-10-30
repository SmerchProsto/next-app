import {SectionInfoBlock} from "@/components/shared/lib/SectionInfoBlock/SectionInfoBlock";
import BlackButton from "@/components/shared/ui/BlackButton/ui";
import A from "@/components/shared/ui/A/ui";
import styled from "styled-components";

const StylizedSectionInfoBlock = styled(SectionInfoBlock)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0 10px 0;
    & h2 {
        margin-bottom: 30px;
        font-size: 48px;
    }

    @media (max-width: 961px) {
        & h2 {
            font-size: 32px;
            margin-bottom: 15px;
        }
    }
`;

export default function LessInfoSection() {
    return (
        <StylizedSectionInfoBlock>
            <h2>Less important title</h2>
            <BlackButton>
                <A linkAddress='/contact-us' text='Contact Us' />
            </BlackButton>
        </StylizedSectionInfoBlock>
    )
}