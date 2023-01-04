import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    background-color: var(--colors-indigo1);
    padding: 15px 30px;
    box-shadow: -5px -4px 20px rgba(140, 149, 159, 0.2);
`;

export const LogoWrapper = styled.a`
    color: var(--colors-white1);
    padding-left: 40px;
    font-weight: 600;
    font-size: var(--font-size4);
    transition-duration: 200ms;

    &:hover {
        color: var(--colors-gray3);
    }

    @media (max-width: 500px) {
        padding-left: 10px;
    }
`;
