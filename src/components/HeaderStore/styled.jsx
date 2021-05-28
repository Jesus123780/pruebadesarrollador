import styled from 'styled-components';

export const Header = styled.div`
    position: -webkit-sticky;
    position: sticky;
    flex-direction: column;
    width: 100vw;
    height: 80px;
    background-color: #f7f7f7;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    top: 0;
    z-index: 9997;
    padding: 0;
    @media only screen and (min-width: 960px){
        display: flex;
    }
`

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    max-width: 1366px !important;
    margin: auto;
    padding: 0 30px;
    @media only screen and (min-width: 960px){
        padding: 0 20px 0 30px;
    }
`

export const Text = styled.i`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    @media only screen and (min-width: 960px){
        padding: 0 20px 0 30px;
    }
`
export const ContentInput = styled.div`
    @media only screen and (min-width: 1248px){
        max-width: 420px;
    }
    @media only screen and (min-width: 960px) {
    max-width: 320px;
    position: relative;
}
`