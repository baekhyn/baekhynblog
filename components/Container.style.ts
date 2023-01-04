import styled from '@emotion/styled';

export const Layout = styled.div`
    padding-right: 14px;
    padding-left: 14px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1300px;
    min-height: 650px;
    gap: 11px;

    main {
        word-break: break-all;
        flex: 1 1 850px;
        gap: 2px;
    }

    @media (max-width: 865px) {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    }
`;

export const NavContainer = styled.div`
    border-bottom: 1px solid var(--colors-gray4);
    margin-top: 30px;
`;
