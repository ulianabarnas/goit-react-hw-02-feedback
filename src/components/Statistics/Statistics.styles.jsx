import styled from "styled-components";

export const Text = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.text};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.s};
`