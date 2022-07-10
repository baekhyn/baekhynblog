import styled from '@emotion/styled';

export const MdxStyle = styled.div`
    min-height: 1000px;
    padding: 0.1rem;
    margin: 1em 2em;
    line-height: 33px;
    font-size: 1rem;

    h1,h2,h3,h4 {
        padding: 20px;
        border-bottom: solid 1px;
    }

    h1 {
        margin: 2rem 1rem;
        font-weight: 800;
        font-size: 1.3rem;
    }

    h2 {
        margin: 2rem 1rem;
        font-weight: 700;
        font-size: 1.2rem;
    }

    h3 {
        margin: 2rem 1rem;
        font-weight: 600;
        font-size: 1.1rem;
    }

    h4 {
        margin: 2rem 1rem;
        font-size: 1rem;
    }

    p {
        margin: 2rem;
        margin-bottom:20px;
    }

    strong {
        font-weight: 600;
    }

    hr {
        width: 100%;
        color: 
        border: solid 0.1px gray;
    }

    ul,
    ol {
        margin: 0.8rem;
        padding-left: 1.4rem;
    }


    code {
        background: var(--dark-gray);
        border-radius: 5px;
        padding: 3px 5px;
        margin: 3px;
        font-size: 14px;
        font-weight: 500;
        border:solid 1px;
        &[class^="language"]{
            background: var(--code-black);
            border: none;
        }
    }

    blockquote {
        border-left: var(--blue-gray) 5px solid;
        margin: 0;
        margin-bottom: 20px;
        padding: 0.9em 10px;
        background: var(--sub-gray);
        & p {
            display: inline;
        }
    }

    img{
        width:80%;
        margin: 0 auto;
    }

    .headings{
        display:block;
    }
`;
