import styled from "styled-components"

export const Heading1 = styled.h1`
    font-size: ${props => props.theme.fonts.h1};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h1};
`
export const Heading2 = styled.h2`
    font-size: ${props => props.theme.fonts.h2};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h2};

`
export const Heading3 = styled.h3`
    font-size: ${props => props.theme.fonts.h3};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h3};
`
export const Heading4 = styled.h4`
    font-size: ${props => props.theme.fonts.h4};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h4};
`

export const Heading4Unbold = styled(Heading4)`
    font-weight: normal;
`
export const Heading5 = styled.h5`
    font-size: ${props => props.theme.fonts.h5};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h5};
`
export const Heading6 = styled.h6`
    font-size: ${props => props.theme.fonts.h6};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h6};
`

export const Paragraph = styled.p`
    font-size: ${props => props.theme.fonts.p};
    line-height: ${props => props.theme.lineHeight.p};
`