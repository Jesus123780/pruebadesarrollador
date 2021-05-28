import styled from 'styled-components'

export const Body = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f3f6fd;
    display: grid;
    grid-gap: 19px 12px;
    grid-template-columns: 0.4fr 2fr;
    grid-template-rows: 1fr;
    justify-items: center;
    padding: 30px;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`