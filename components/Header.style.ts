import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    background-color: var(--colors-indigo1);
    padding: 1rem;
    box-shadow: -5px -4px 20px rgba(140, 149, 159, 0.2);
`;

export const LogoWrapper = styled.a`
    color: var(--colors-white1);
    font-size: var(--font-size4);
    font-weight: 600;
    padding-left: 0.3rem;
    transition-duration: 200ms;

    &:hover {
        color: var(--colors-gray3);
    }
`;
