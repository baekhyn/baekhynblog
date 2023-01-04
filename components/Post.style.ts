import styled from '@emotion/styled';
import { css } from '@emotion/react';

const align = css`
    text-align: right;

    @media (max-width: 490px) {
        text-align: left;
    }
`;

export const LinkWrapper = styled.a`
    display: block;
`;

export const HeadingWrapper = styled.h1`
    color: var(--colors-black1);
    margin: 0;
    text-align: left;
    font-size: var(--font-size3);
    border-bottom: solid 1px var(--colors-gray4);
    padding: 2rem;
    pointer-events: none;

    span {
        font-weight: 600;
        margin-left: 8px;
    }
`;

export const PostContainer = styled.article`
    list-style: none;
    color: var(--colors-black2);
    padding: 0 0.8rem;
    max-width: 100%;
    ${align}
    margin: 0;

    article {
        padding: 24px 24px;
        border-bottom: 1px solid var(--colors-gray4);
    }

    h2 {
        margin: 0;
        margin-left: 8px;
        margin-bottom: 1rem;
        text-align: left;
        font-size: var(--font-size4);
    }

    p {
        color: var(--colors-gray2);
        margin: 0.7rem 0.1rem;
        margin-left: 8px;
        font-weight: 400;
        font-size: var(--font-size2);
        text-align: left;
    }

    span {
        font-size: var(--font-size1);
        margin-right: 0.5rem;
        padding: 6px 8px;
        border-radius: 13px;
        font-weight: 500;
        background: var(--colors-blue3);
        color: var(--colors-blue1);

        &:hover {
            background: var(--colors-blue1);
            color: #fff;
            transition-duration: 100ms;
        }
    }

    time {
        font-size: var(--font-size1);
    }
`;

export const NoPost = styled.h2`
    text-align: center;
`;
