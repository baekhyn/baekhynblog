import styled from '@emotion/styled'
import { css } from '@emotion/react'

const responsiveNav = css`
    @media (max-width: 705px) {
        display: none;
    }
`

export const BlogLogo = styled.a`
    display: inline-block;
    line-height: 110%;
    padding: 2rem 1.2rem;
    font-weight: 900;
    font-size: 2.2rem;
    ${responsiveNav}
`

export const HeaderBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${responsiveNav}
`
