import styled from '@emotion/styled'

export const TitleBox = styled.div`
    padding: 0.1rem;
    padding-bottom: 1rem;
    margin: 1em 2em;
    margin-top: 2em;
    margin-bottom: 1em;
    border-bottom: solid 1px;

    h1 {
        font-size: 24px;
        margin-left: 0;
        margin-bottom: 0.5em;
        font-weight: 700;
    }
    p {
        margin: 0;
        margin-bottom: 1em;
        font-size: 0.9em;
        font-weight: 450;
    }
    small {
        font-size: 0.8em;
        margin-bottom: 0.3em;
        padding: 0.4em;
        border-radius: 12px;
        background-image: var(--rose-blue);
    }
    div {
        font-size: 0.8em;
        font-weight: 500;
        margin-left: 1em;
        display: inline-block;
        color: var(--light-gray);
    }
`