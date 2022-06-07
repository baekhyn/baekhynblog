import styled from '@emotion/styled'

export const NoProject = styled.h2`
    text-align: center;
`

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ProjectBox = styled.div`
    display: flex;
    justify-content: center;
    background-color: yellow;
    width: 40%;
    max-width: 300px;
    height: auto;
    margin: 1em;
    margin-left: 2rem;
    padding: 0.7em;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: inset 5px 5px 10px #bdbdbd, inset -5px -5px 10px #ffffff;

    h1 {
        font-weight: 600;
        font-size: 1.1rem;
        margin: 0.1em;
        margin-top: 0.5em;
        text-align: center;
    }
`
