import React, { createContext, useEffect, useState } from 'react'
import { object } from 'prop-types'
export const Context = createContext()

const Provider = ({ children }) => {
    const [error, setError] = useState({})

    useEffect(() => {
        !!error?.message &&
            setTimeout(() => setError(''), error.duration || 7000)
    }, [error])

    const value = {
        error,
        setAlertBox: err => setError(err)
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
    Provider,
    Consumer: Context.Consumer
}
Provider.propTypes = {
    children: object.isRequired
}