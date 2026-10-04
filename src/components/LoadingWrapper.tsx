import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Power_button_off from './icons/Power_button_off.tsx'
import Power_button from './icons/Power_button.tsx'


// Component
function LoadingWrapper() {
    return <div className={"n-base-loading__transition-wrapper"}>
        <div className={"n-base-loading__container"}>
            <Power_button_off />
        </div>
    </div>
}


export default LoadingWrapper
