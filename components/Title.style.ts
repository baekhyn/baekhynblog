import styled from '@emotion/styled'
import { css } from '@emotion/react'

const responsiveTitle = css`
    @media (max-width: 705px) {
        font-size: 1.3rem;
        margin: 2.5rem;
        margin-bottom: 2rem;
    }
    @media (max-width: 420px) {
        font-size: 1.1rem;
        margin: 2.5rem;
        margin-bottom: 2rem;
    }
`
const responsiveLine = css`
    @media (max-width: 705px) {
        width: 93%;
    }
    @media (max-width: 420px) {
        width: 91%;
    }
`

export const TitleContainer = styled.div`
    h1 {
        font-size: 1.4rem;
        margin: 2.8rem;
        ${responsiveTitle}
    }

    hr {
        width: 95%;
        ${responsiveLine}
    }
`
