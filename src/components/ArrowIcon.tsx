import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Arrow_right_thin from './icons/Arrow_right_thin.tsx'
import Icon from './Icon.tsx'


// Component
function ArrowIcon() {
    return <i className={"n-base-icon"}>
        <Arrow_right_thin />
    </i>
}


export default ArrowIcon
