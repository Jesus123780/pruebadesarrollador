import styled from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';

export const Container = styled.div`
    background-color: ${ BGColor };
    border-top: 1px solid ${ PColor };
    padding: 30px;
    width: 100%;
    height: auto;
    display: flex;
`