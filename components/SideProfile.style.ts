import styled from '@emotion/styled';

export const SideContainer = styled.aside`
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 0.8rem;
    max-width: 660px;

    @media (min-width: 700px) {
        flex: 1 1 250px;
        max-width: 300px;
    }

    & .home-image {
        width: 100%;
        height: auto;
        border-radius: 350px;
        border: 1.5px solid var(--colors-gray4);
        box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    }

    & .svg-icon {
        margin-right: 5px;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    max-width: 30%;
    @media (min-width: 700px) {
        max-width: 100%;
    }
`;

export const HomeProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: var(--font-size3);
`;

export const ProfileName = styled.a`
    color: var(colors-black1);
    font-weight: 700;
    transition-duration: 230ms;
    font-size: var(--font-size5);

    &:hover {
        color: var(--colors-blue1);
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--font-size3);
    padding: 1rem 0.5rem;
    p {
        color: var(--colors-black1);
        margin: 0;
    }
`;
