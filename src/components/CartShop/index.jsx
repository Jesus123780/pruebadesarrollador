import React, { useState } from 'react'
import { PColor } from '../../assets/colors'
import { IconLogout, IconShopping } from '../../assets/icons/icons'
import { Content, FloatingBox, Button } from './styled'
export const CartShop = () => {
    const [show, setshow] = useState(false)
    const onClick = () => {
        setshow(!show)
    }
    const onClickLogout = () => {
        // eslint-disable-next-line
        console.log('has center')
    }
    return (
        <>
            <Content>
                <Button onClick={onClick}>
                    <IconShopping size='25px' color={PColor} />
                </Button>
                <FloatingBox show={show}>
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                </FloatingBox>
                <Button onClick={onClickLogout}>
                    <IconLogout size='20px' color={PColor} />
                </Button>
                <Button onClick={onClickLogout}>
                    <IconShopping size='25px' color={PColor} />
                </Button>
            </Content>
        </>
    )
}