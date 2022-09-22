import styled from "styled-components";


export const Button = styled.button`
    width: 80px;
    padding: ${p => p.theme.space[3]}px;
    /* ${p => p.theme.space[2]}px; */
    border: ${p => p.theme.borders.none};
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: #5f5f5f;

    :not(:last-child) {
        margin-right: ${p => p.theme.space[4]}px;
    }

    background-color: ${({children, theme }) => {
    switch (children) {
        case "good":
            return theme.colors.good;
        case "neutral":
            return theme.colors.neutral;
        case "bad":
            return theme.colors.bad;
        default:
            return theme.colors.muted;
    }
   }};
`