import styled from '@emotion/styled';

export const CategoryContainer = styled.ul`
    list-style: none;
    padding: 0 1rem;
    display: flex;
`;

export const CategoryItem = styled.a`
    font-size: var(--font-size1);
    margin-right: 0.5rem;
    padding: 6px 8px;
    border-radius: 13px;
    font-weight: 500;
    background: var(--colors-blue3);
    color: var(--colors-blue1);

    &:hover {
        background: var(--colors-blue1);
        color: #fff;
        transition-duration: 100ms;
    }
`;
