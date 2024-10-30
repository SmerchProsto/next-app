import styled from "styled-components";
import CenteredContainer from "@/components/CenteredContainer/ui";
import BlackButton from "@/components/shared/BlackButton/ui";
import A from "@/components/A/ui";

const FeaturesBlock = styled.section`
    padding: 40px 0 10px 0;
`;


const FeaturesTitle = styled.h2`
    margin-bottom: 50px;
    font-size: 48px;
    text-align: center;
    
    @media (max-width: 961px) {
        margin-bottom: 25px;
        font-size: 32px;
    }
    
`;

const FeaturesItems = styled.ul`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    list-style: none;
    margin: 0 0 25px 0;
    padding: 16px;

    @media (max-width: 376px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    
    @media (max-width: 961px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        margin: 0 0 15px 0;
    }

   
    @media (min-width: 962px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }
`;

const FeaturesItem = styled.li`
    margin: 0;
    padding: 16px;
    
    & h3 {
        font-size: 24px;
    }
    & p {
        color: #C2C2C2;
    }
`;

const FeaturesButtons = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Features() {
    const features = Array(6).fill(null);
    return (
        <FeaturesBlock>
            <CenteredContainer>
                <FeaturesTitle>Also very important title</FeaturesTitle>
                <FeaturesItems>
                    {features.map((_, index) => (
                        <FeaturesItem key={index}>
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
                                condimentum</p>
                        </FeaturesItem>
                    ))}
                </FeaturesItems>
                <FeaturesButtons>
                    <BlackButton>
                        <A linkAddress="/contact-us" text="Contact us" />
                    </BlackButton>
                </FeaturesButtons>
            </CenteredContainer>
        </FeaturesBlock>
    )
}