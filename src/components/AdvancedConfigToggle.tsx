import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Arrow_right_bold from './icons/Arrow_right_bold.tsx'


// Component
function AdvancedConfigToggle() {
    return <button data-v-830291ff={""} type={"button"} className={"advanced-config-toggle"}>
        <Arrow_right_bold />
        <span data-v-830291ff={""} data-navigate-routes={JSON.stringify(["/dashboard?step=28"])}>
            Advanced Configuration
        </span>
    </button>
}


export default AdvancedConfigToggle
