import styled from '@emotion/styled';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.1rem;

    main {
        min-height: 600px;
        min-width: 0;
    }

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: center;
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
        gap: 10px;

        main {
            flex: 1 1 850px;
            max-width: 850px;
        }
    }
`;

export const NavContainer = styled.div`
    border-bottom: 1px solid var(--colors-gray4);
    margin-top: 1.3rem;
`;
