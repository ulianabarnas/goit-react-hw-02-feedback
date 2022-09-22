import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.primary};
    margin-bottom: ${p => p.theme.space[4]}px;
    text-transform: uppercase;
`