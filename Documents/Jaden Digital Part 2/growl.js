import React from 'react'

import './growl.css'

import timer from 'component-library'

export const Growl = ({ active, message, onDismissed }) => {
    const [state, setState] = React.useState(true)

    React.useEffect(() => {
        setState(true)
    }, [active])

    const handleClick = () => {
        setState(false)
        timer()
        onDismissed()
    }

    return (
        <div className={`growl${active && state ? ' active' : ''}`}>
            {message}
            <div onClick={handleClick} className="growl-close"></div>
        </div>
    )
}

export function useGrowl() {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false)

    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}