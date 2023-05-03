import { css } from '@emotion/react';
import styled from '@emotion/styled';

const navStyle = css`
    color: var(--colors-black2);
    font-size: var(--font-size3);
    font-weight: 500;
    border-bottom: 3px solid transparent;
    padding: 1rem 0;

    @media (min-width: 700px) {
        margin: 0 14px;
        padding: 16px 9px;
    }
`;

export const NavWrapper = styled.div`
    padding: 0 1rem;

    @media (min-width: 700px) {
        display: flex;
        max-width: 1300px;
        margin: 0 auto;
    }
`;

export const NavBox = styled.nav`
    display: flex;
    justify-content: space-around;

    @media (min-width: 700px) {
        flex: 1 2.2 850px;
        max-width: 850px;
        justify-content: flex-start;
    }
`;

export const NavBlock = styled.div`
    display: none;

    @media (min-width: 700px) {
        display: flex;
        flex: 1 1 250px;
        padding: 0 0.8rem;
    }
`;

export const ActiveLinkItem = styled.a`
    ${navStyle}
    border-bottom-color: var(--colors-blue1);
    color: var(--colors-black1);
`;

export const LinkItem = styled.a`
    ${navStyle}

    &:hover {
        color: var(--colors-black1);
        border-bottom-color: var(--colors-gray4);
        transition-duration: 250ms;
    }
`;
