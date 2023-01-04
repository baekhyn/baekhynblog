import { css } from '@emotion/react';
import styled from '@emotion/styled';

const navStyle = css`
    color: var(--colors-gray1);
    font-size: var(--font-size3);
    font-weight: 500;
    padding: 16px 9px;
    border-bottom: 2px solid transparent;
    margin: 0 14px;

    @media (max-width: 490px) {
        padding: 16px 1px;
        margin: 0;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
`;

export const NavBox = styled.nav`
    display: flex;
    align-items: center;
    flex: 1 2.2 850px;

    @media (max-width: 865px) {
        justify-content: space-around;
    }
`;

export const NavBlock = styled.div`
    flex: 1 1 250px;

    @media (max-width: 865px) {
        display: none;
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
