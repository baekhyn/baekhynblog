import styled from '@emotion/styled';
import { css } from '@emotion/react';

const headings = css`
    margin: 0;
    margin-top: 2em;
`;

export const H1 = styled.h1`
    ${headings}
    font-weight: 800;
    font-size: var(--font-size6);
`;

export const H2 = styled.h2`
    ${headings}
    font-weight: 700;
    font-size: var(--font-size5);
`;

export const H3 = styled.h3`
    ${headings}
    font-weight: 600;
    font-size: var(--font-size4);
`;

export const Text = styled.p`
    padding: 2px 3px;
    font-size: var(--font-size3);
    line-height: 150%;
`;

export const Blockquote = styled.blockquote`
    margin: 0;
    padding: 12px 16px 16px 16px;
    background-color: var(--colors-gray6);
    border-radius: 3px;
`;

export const Code = styled.code`
    background-color: var(--colors-gray5);
    font-family: inherit;
    padding: 2.5px 6px;
    color: var(--colors-pink1);
    border-radius: 4px;
    margin: 3px;
`;

export const Li = styled.li`
    line-height: 2.2;
`;

export const Ul = styled.ul`
    line-height: 2.2;
    padding-left: 1.2em;
`;

export const Ol = styled.ol`
    line-height: 2.2;
    padding-left: 1.2em;
`;

export const Strong = styled.strong`
    font-weight: 600;
`;

export const Line = styled.hr`
    border: 0.5px solid var(--colors-gray4);
`;

export const CodeStyle = styled.pre`
    font-family: SFMono-Regular, Menlo, Consolas, Courier, monospace;
    overflow-x: auto;

    ${Code} {
        background-color: inherit;
        font-family: inherit;
        color: #f0f0f0;
    }
`;

export const NavStyle = styled.nav`
    font-weight: 600;
    font-size: var(--font-size2);
    background: var(--colors-gray6);
    color: var(--colors-blue1);
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 2.5em;
    overflow-x: auto;

    & a:hover {
        text-decoration: underline;
    }

    & .image {
        width: 100%;
        height: auto;
    }
`;

export const MdxStyle = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0;
    color: var(--colors-black3);
    font-size: var(--font-size3);
`;
