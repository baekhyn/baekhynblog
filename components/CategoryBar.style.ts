import styled from '@emotion/styled';

export const CategoryStyle = styled.ul`
    list-style: none;
`;

export const CategoryText = styled.li`
    h1 {
        font-size: 1.3rem;
        border-radius: 12px;
        text-align: center;
        margin: 1rem auto;
        margin-left: 0.5rem;
        padding: 0.3rem;
        width: 90%;
        background-image: var(--ocean);
        transition-property: width;
        transition-duration: 1s, 5s;
        transition-delay: 0.1s;
        &:hover {
            width: 65%;
        }
    }
`;
