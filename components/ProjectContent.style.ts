import styled from '@emotion/styled';

export const NoProject = styled.h2`
    text-align: center;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
    height: auto;
`;

export const ProjectBox = styled.div`
    border: 1px solid var(--colors-gray4);
    max-width: 300px;
    padding: 3px 7px;
    border-radius: 15px;

    a {
        width: 300px;
        height: auto;
    }

    p {
        font-weight: 600;
        text-align: center;
    }
`;
