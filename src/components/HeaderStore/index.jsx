import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoImage from '../../assets/'
import InputHooksSearcher from '../InputHooksSearcher/InputHooks'
import { CartShop } from '../CartShop'
import { Header, Content, ContentInput } from './styled'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
export const HeaderC = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
        console.log(values)
    }
    return (
        <Header>
            <Content>
                <div>
                    <Link to='/'>
                        <Img size='80px' src={logo} />
                    </Link>
                </div>
                <div>
                    <ContentInput>
                        <InputHooksSearcher title='Busca tus productos' name='value' value={values.value} onChange={handleChange} type='text' range={{ min: 0, max: 20 }} />
                    </ContentInput>
                </div>
                <CartShop />
            </Content>
        </Header>
    )
}
const Img = styled.img`
    width: 80px;
    height: 80px;
`