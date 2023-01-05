import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    padding: 2rem 0;
    border-top: 1px solid var(--colors-gray4);

    small,
    p {
        font-size: var(--font-size1);
        color: var(--colors-black2);
        margin: 0;
    }
`;
