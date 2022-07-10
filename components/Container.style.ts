import styled from '@emotion/styled';
import { css } from '@emotion/react';

const responsiveHeight = css`
    @media (max-width: 420px) {
        min-height: 600px;
    }
`;

export const ContainerBox = styled.div`
    max-width: 800px;
    min-height: 700px;
    margin: 0.5rem auto;
    background-color: var(--main-white);
    ${responsiveHeight}
`;
