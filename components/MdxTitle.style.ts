import styled from '@emotion/styled';

export const TitleBox = styled.div`
    padding: 1rem;
    max-width: 100%;
    margin: 0;
    margin-bottom: 12px;
    color: var(--colors-black3);

    h1 {
        font-size: var(--font-size6);
        margin-bottom: 0.5em;
        font-weight: 700;
    }

    p {
        font-size: var(--font-size3);
        margin: 0;
        margin-bottom: 1em;
        font-size: 0.9em;
        font-weight: 450;
        color: var(--colors-gray2);
    }

    small {
        font-size: 0.8em;
        margin-bottom: 0.3em;
        padding: 0.4em;
        border-radius: 12px;
        background-image: var(--colors-blue3);
    }

    div {
        font-size: 0.8em;
        font-weight: 500;
        margin-left: 1em;
        display: inline-block;
        color: var(--light-gray);
    }

    time {
        color: var(--colors-black2);
        font-size: 12px;
    }
`;

export const PostTag = styled.a`
    display: inline-block;
    font-size: 11px;
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
`;
