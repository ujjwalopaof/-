import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Arrow_down from './icons/Arrow_down.tsx'


// Component
function SuffixArrow() {
    return <i className={"n-base-icon n-base-suffix__arrow"}>
        <Arrow_down />
    </i>
}


export default SuffixArrow
