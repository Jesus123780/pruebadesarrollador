import styled, { css } from 'styled-components';
import { BGColor } from '../../assets/colors';

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (min-width: 960px){
    }
`
export const Button = styled.button`
    margin: 0 0 0 30px;
    background-color: transparent;
    @media only screen and (min-width: 960px){
    }
`
export const FloatingBox = styled.div`
    position: absolute;
    width: 100%;
    top: 45px;
    right: -30px;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 30%);
    border-radius: 5px;
    transition: all 0.2s ease;
    background-color: ${ BGColor };
    padding: 10px;
  ${ ({ show }) => show
        ? css`
                  visibility: visible;
                  opacity: 1;
                  transform: translateY(0);
              `
        : css`
                
                  margin: 0;
                  visibility: hidden;
                  opacity: 0;
                  transform: translateY(1px);
              ` }
              &::before {
    border: 7px solid  ${ BGColor };
    box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
    content: '';
    left: 30px;
    position: absolute;
    top: 2px;
    transform-origin: 0 0;
    transform: rotate(
135deg
);
    transform: rotate(
135deg
);
}
    @media only screen and (min-width: 960px){
    }
`