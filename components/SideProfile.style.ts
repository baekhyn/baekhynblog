import styled from '@emotion/styled';

export const SideContainer = styled.aside`
    position: relative;
    top: -3.7rem;
    flex: 1 1 250px;
    padding: 13px;

    @media (max-width: 865px) {
        flex: 1 1 180px;
        display: flex;
        gap: 25px;
        top: 0;
        align-items: center;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;

    @media (max-width: 865px) {
        max-width: 160px;
        margin-bottom: 0;
    }

    @media (max-width: 480px) {
        max-width: 110px;
        margin-bottom: 0;
    }
`;

export const ProfileName = styled.a`
    color: var(colors-black1);
    font-weight: 700;
    transition-duration: 230ms;
    font-size: var(--font-size4);

    &:hover {
        color: var(--colors-blue1);
    }
`;

export const TextWrapper = styled.div`
    color: var(--colors-gray1);
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    flex-grow: 0;
    gap: 8px;
    font-size: var(--font-size2);
    margin-bottom: 20px;

    @media (max-width: 865px) {
        justify-content: flex-end;
        margin-bottom: 0;
    }
`;
