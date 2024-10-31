import styled from "styled-components";
import {Button} from "@mui/material";

export const ContactFormBlock = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px; 
    max-width: 100%;
    padding: 20px;
    margin: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    @media (max-width: 376px) {
        padding: 10px;
    }

    @media (min-width: 376px) and (max-width: 961px) {
        max-width: 100%;
    }
    @media (min-width: 961px) and (max-width: 1600px) {
        max-width: 600px;
    }

    @media (min-width: 1600px) {
        max-width: 800px;
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;

    & label {
        margin-bottom: 8px;
    }

    & input,
    & textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s ease;
    }

    & input:focus,
    & textarea:focus {
        border-color: #3f51b5;
        outline: none;
    }

    /* Условный стиль для класса invalid */
    & .invalid {
        border-color: red !important;
    }

    @media (max-width: 376px) {
        & input,
        & textarea {
            font-size: 14px;
        }
    }

    @media (min-width: 376px) and (max-width: 961px) {
        & input,
        & textarea {
            font-size: 16px;
        }
    }

    @media (min-width: 961px) and (max-width: 1600px) {
        & input,
        & textarea {
            font-size: 18px;
        }
    }

    @media (min-width: 1600px) {
        & input,
        & textarea {
            font-size: 20px;
        }
    }
`;

export const SubmitButton = styled(Button)`
    color: #ffffff;
    text-align: center;
    background: rgb(44, 44, 44);
    border-radius: 8px;

    &:hover {
        background: #747171FF;
    }
`;