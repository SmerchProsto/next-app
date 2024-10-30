import {ReactNode} from "react";
import styled from "styled-components";

const StylizedDiv = styled.div<{$width?: string;}>`
    width: 200px;
    padding: 10px;
    color: #ffffff;
    text-align: center;
    background: rgb(44, 44, 44);
    border-radius: 8px;
    
    @media (max-width: 376px) {
        width: 150px;
    }
`;

export default function BlackButton({children, width}: {children: ReactNode|string, width?:string}) {
    return <StylizedDiv $width={width}>{children}</StylizedDiv>;
}