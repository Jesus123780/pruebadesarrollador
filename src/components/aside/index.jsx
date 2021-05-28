import React, { useContext, useEffect } from 'react'
import { HeaderC } from '../header'
import { Body } from './styled'
import { AlertBox } from '../AlertBox'
import { Context } from '../../Context'
import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'

export const LayoutMain = ({ children, error }) => {
    const [theme, handleTheme, mountedComponent, { keyTheme }] = useTheme()

    const { setAlertBox } = useContext(Context)
    const Theme = localStorage.getItem('theme')
    if (!mountedComponent) setAlertBox({ message: 'Hola2', duration: 5000, color: 'red' })

    useEffect(() => {
        setAlertBox({ message: 'Hola mundo', duration: 5000, color: 'red' })
    }, [])
    return (
        <>
            <button
                onClick={() => keyTheme === 'light' ? handleTheme('dark') : handleTheme('light')}>
                <div active={Theme === 'dark' ? '30px' : '0px'} />cambiar
            </button>
            <ThemeProvider theme={theme}>
                <AlertBox err={error} />
                <Body>
                    <HeaderC />
                    {children}
                </Body>
            </ThemeProvider>

        </>

    )
}