import styled from "styled-components";

export const Button = styled.button`
    width: 80px;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.white};
    transition: all 100ms linear;
    background-color: ${({ children, theme }) => {
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
    box-shadow: ${({ children }) => {
        switch (children) {
            case "good":
                return '0px 4px 0px 0px #218324';
            case "neutral":
                return '0px 4px 0px 0px #ada818';
            case "bad":
                return '0px 4px 0px 0px #c4561f';
            default:
                return '0px 4px 0px 0px #000000';
        }
    }};
    
    :not(:last-child) {
        margin-right: ${p => p.theme.space[4]}px;
    }

    :active {
        box-shadow: 0px 0px 1px 1px #cbcbcb;
        transform: translateY(4px);
    }
`