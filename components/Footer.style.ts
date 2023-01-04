import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
    display: flex;
    align-content: center;
    flex: 1;
    flex-direction: column;
    height: 100px;
    padding: 2rem 0;
    border-top: 1px solid var(--colors-gray4);

    span,
    a {
        font-size: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        height: 100px;
    }
`;
