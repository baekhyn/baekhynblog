import styled from '@emotion/styled';
import { css } from '@emotion/react';

const fontSize = css`
    @media (max-width: 420px) {
        font-size: 0.5em;
    }
`;
const align = css`
    @media (max-width: 505px) {
        text-align: left;
    }
`;

const margin = css`
    @media (max-width: 420px) {
        padding: 0;
    }
    @media (max-width: 505px) {
        padding: 0 0.3rem;
    }
`;

export const PostStyle = styled.ul`
    padding: 0 1rem;
    max-width: 900px;
    text-align: right;
    list-style: none;
    ${align}
    ${margin}

    li {
        height: 120px;
        margin: 1em;
        padding: 1em;
        &:hover {
            background-image: var(--ocean);
            border-radius: 12px;
        }
    }

    a {
        font-size: 0.6rem;
        ${fontSize}
    }

    // 19.2
    h1 {
        margin: 0;
        margin-bottom: 1rem;
        text-align: left;
        font-size: 2em;
    }

    // 14.4
    h2 {
        margin: 0.1rem;
        font-weight: 400;
        font-size: 1.5em;
        text-align: left;
        color: var(--light-gray);
    }

    // 12.8
    // 13.44
    span {
        font-size: 1.4em;
        display: inline-block;
        margin-right: 0.5rem;
        color: var(--light-gray);
    }

    // 12.8
    div {
        display: inline-block;
        font-size: 1.4em;
        margin-right: 0.5rem;
        color: var(--light-gray);
    }
`;
export const NoPost = styled.h2`
    text-align: center;
`;
