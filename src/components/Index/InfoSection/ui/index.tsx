import styled from "styled-components";
import CenteredContainer from "@/components/shared/CenteredContainer/ui";
import {LazyYoutubeEmbed} from "@/lib/LazyYoutubeEmbed";

const StylizedSection = styled.section`
    min-height: 350px;
    background: rgb(245, 245, 245);
    
    & .centeredContainer {
        display: flex;
        justify-content: space-between;
        padding: 30px 0 30px 0;
    }
    
    @media (max-width: 961px) {
        & .centeredContainer {
            flex-direction: column;
        }
    }
    
    & .infoSectionTitle {
        visibility: hidden;
        position: absolute;
        width: 0;
        height: 0;
    }
`;

const InfoSectionContentBlock = styled.section`
    width: 30%;
    &:nth-of-type(2n) {
        width: 40%;
    }
    
    & h1, & p {
        margin-top: 0;
    }

    & h1 {
        font-size: 48px;
        margin-bottom: 15px;
    }
    
    & .youtubePlayer {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 961px) {
        width: 100%;
        
        &:nth-of-type(2n) {
            width: 100%
        }

        & h1 {
            font-size: 32px; 
        }

        & p {
            margin-bottom: 20px;
        }
    }
`;



export default function InfoSection() {
    return (
        <StylizedSection>
            <CenteredContainer>
                <h2 className="infoSectionTitle">Info title</h2>
                <InfoSectionContentBlock>
                    <h1>Most important title on the page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus,
                        vel suscipit nibh lacus tincidunt ante
                    </p>
                </InfoSectionContentBlock>
                <InfoSectionContentBlock>
                    <LazyYoutubeEmbed className='youtubePlayer' videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                </InfoSectionContentBlock>
            </CenteredContainer>
        </StylizedSection>
    )
}