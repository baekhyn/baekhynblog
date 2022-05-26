import styled from '@emotion/styled'

export const NavBox = styled.nav`
    display: flex;
    span {
        margin: 2rem;
    }

    a {
        font-size: 1.3rem;
        font-weight: 700;
        border-radius: 5px;
        &:hover {
            background-image: var(--yellow-violet);
        }
    }
`

export const ActiveNavItem = styled.a`
    background-image: var(--yellow-violet);
`
