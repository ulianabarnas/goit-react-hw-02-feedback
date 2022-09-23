import styled from "styled-components";

export const Button = styled.button`
    width: 80px;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: #5f5f5f;
    transition: all 100ms linear;
    box-shadow: ${({children}) => {
        switch (children) {
            case "good":
                return '0px 4px 0px 0px #64bb67';
            case "neutral":
                return '0px 4px 0px 0px #d4d059';
            case "bad":
                return '0px 4px 0px 0px #c8805c';
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