import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ActiveProps = {
    active: boolean;
};

export const activeLink = (props) =>
    props.active
        ? css`
              pointer-events: none;
              cursor: default;
              color: var(--colors-gray3);
          `
        : css`
              color: var(--colors-blue1);
              &:hover {
                  font-weight: 700;
              }
          `;

export const PageNavContainer = styled.div`
    display: flex;
    padding: 0 1rem;
    margin: 2rem 0;
    justify-content: center;
    font-size: var(--font-size2);
`;

export const SingleButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--colors-blue1);
    border: 1px solid var(--colors-gray4);
    border-radius: 8px;
    height: 38px;
    font-size: var(--font-size2);
    font-weight: 600;
    padding: 3px;
    width: 100%;

    &:hover {
        font-weight: 700;
        background-color: var(--colors-gray6);
    }
`;

export const PageButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid var(--colors-gray4);
    height: 38px;
    width: 150px;
`;

export const PageState = styled.a<ActiveProps>`
    ${activeLink}
    width: 100%;
    text-align: center;
    font-weight: 500;

    &:hover {
        font-weight: 700;
    }
`;
