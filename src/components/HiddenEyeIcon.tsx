import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Eye_hidden from './icons/Eye_hidden.tsx'
import Icon from './Icon.tsx'


// Component
function HiddenEyeIcon() {
    return <i className={"n-base-icon"}>
        <Eye_hidden />
    </i>
}


export default HiddenEyeIcon
